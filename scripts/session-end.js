#!/usr/bin/env node
/**
 * Session End Hook (Stop event)
 *
 * When Claude Code session ends or pauses:
 * 1. Reads the session transcript (if available)
 * 2. Extracts key info: tasks done, decisions made, pending items
 * 3. Writes/updates status_handoff.md automatically
 *
 * This ensures no progress is lost even if the session is force-closed.
 *
 * No dependencies required — pure Node.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const MEMORY_PATHS = [
  path.join(process.cwd(), '.claude', 'memory'),
  path.join(os.homedir(), '.claude', 'projects', '-', 'memory'),
];

function findMemoryDir() {
  for (const dir of MEMORY_PATHS) {
    if (fs.existsSync(dir)) return dir;
  }
  return null;
}

function getTimestamp() {
  const now = new Date();
  // Try to use local timezone
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const h = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${d} ${h}:${min}`;
}

function extractSummary(transcriptPath) {
  // If transcript is available, extract user messages
  if (!transcriptPath || !fs.existsSync(transcriptPath)) return null;

  try {
    const content = fs.readFileSync(transcriptPath, 'utf8');
    const lines = content.split('\n').filter(Boolean);
    const userMessages = [];

    for (const line of lines) {
      try {
        const entry = JSON.parse(line);
        const rawContent = entry.message?.content ?? entry.content;
        if ((entry.type === 'user' || entry.role === 'user' || entry.message?.role === 'user') && rawContent) {
          const text = typeof rawContent === 'string'
            ? rawContent
            : Array.isArray(rawContent)
              ? rawContent.map(c => (c && c.text) || '').join(' ')
              : '';
          if (text.length > 5 && text.length < 200) {
            userMessages.push(text.trim());
          }
        }
      } catch { /* skip unparseable lines */ }
    }

    return userMessages.slice(-10); // Last 10 user messages
  } catch {
    return null;
  }
}

function main() {
  const raw = fs.readFileSync(0, 'utf8');
  const memDir = findMemoryDir();

  if (!memDir) {
    process.stdout.write(raw);
    return;
  }

  // Try to get transcript path from the event
  let transcriptPath = null;
  try {
    const event = JSON.parse(raw);
    transcriptPath = event.transcript_path || event.session?.transcript_path;
  } catch { /* not JSON, that's ok */ }

  const timestamp = getTimestamp();
  const handoffPath = path.join(memDir, 'status_handoff.md');

  // Read existing handoff
  let existing = '';
  try {
    existing = fs.readFileSync(handoffPath, 'utf8');
  } catch { /* file doesn't exist yet */ }

  // Extract summary from transcript
  const userMessages = extractSummary(transcriptPath);

  // Build auto-saved section
  const autoSection = [
    '',
    `## Auto-saved: ${timestamp}`,
    '',
  ];

  if (userMessages && userMessages.length > 0) {
    autoSection.push('Recent tasks:');
    for (const msg of userMessages) {
      autoSection.push(`- ${msg}`);
    }
  } else {
    autoSection.push('Session ended. No transcript available for auto-summary.');
  }

  // Append to existing handoff (don't overwrite manual content)
  const marker = '<!-- AUTO-SAVE -->';
  let newContent;

  if (existing.includes(marker)) {
    // Replace everything after marker
    newContent = existing.split(marker)[0] + marker + autoSection.join('\n');
  } else {
    // Append marker and auto section
    newContent = existing + '\n' + marker + autoSection.join('\n');
  }

  fs.writeFileSync(handoffPath, newContent, 'utf8');

  // Pass through
  process.stdout.write(raw);
}

main();
