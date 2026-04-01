#!/usr/bin/env node
/**
 * Session Start Hook
 *
 * When a new Claude Code session starts:
 * 1. Reads MEMORY.md index
 * 2. Loads the latest status_handoff.md if it exists
 * 3. Outputs a summary so Claude starts with context
 *
 * No dependencies required — pure Node.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

// Memory directory paths (check project-level first, then global)
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

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
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

  // Read index
  const index = readFile(path.join(memDir, 'MEMORY.md'));

  // Read latest status handoff
  const status = readFile(path.join(memDir, 'status_handoff.md'));

  // Build context summary
  const parts = ['[Memory Framework] Session started.'];

  if (index) {
    const fileCount = (index.match(/\.md/g) || []).length;
    parts.push(`Memory index loaded: ${fileCount} files tracked.`);
  }

  if (status) {
    // Extract the update time
    const timeMatch = status.match(/更新時間[：:]\s*(.+)/);
    const lastUpdate = timeMatch ? timeMatch[1].trim() : 'unknown';
    parts.push(`Last status update: ${lastUpdate}`);
  }

  // Pass through the original input
  process.stdout.write(raw);
}

main();
