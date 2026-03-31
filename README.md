# Claude Memory Framework

[繁體中文](README.zh-TW.md) | English

**Structured templates for Claude Code's auto memory system.**

Claude Code already has persistent memory — `CLAUDE.md` for instructions, auto memory for AI-written notes, and session resume. What it doesn't have is a **structure** for that memory.

The built-in auto memory lets Claude write whatever it wants, however it wants. This framework gives it a defined taxonomy: **User, Feedback, Project, Reference** — with YAML frontmatter, an index pattern, and templates you can customize.

Built by [@kanisleo328](https://www.threads.net/@kanisleo328). This is the system behind [LeoAIdo](https://leoaido.com).

---

## The Problem

Claude Code's auto memory is powerful but unstructured. Claude decides what to save and how to organize it. Over time, you get a pile of notes with no consistent format, no categorization, and no way to ensure the important stuff is always loaded.

Common issues:
- Claude remembers code conventions but forgets your business goals
- Memory files grow without clear structure — hard to review or edit
- No standard way to capture corrections so the same mistake doesn't repeat
- When you start a new project, you have to rebuild context from scratch

---

## What This Framework Does

It provides **templates and conventions** on top of Claude Code's native memory system.

| What | Native Auto Memory | + This Framework |
|------|-------------------|------------------|
| Storage | `~/.claude/projects/-/memory/` | Same location |
| Index | MEMORY.md (AI-written) | MEMORY.md (human-curated) |
| Structure | Free-form, AI decides | 4 defined categories + YAML frontmatter |
| What gets saved | Code patterns, debug notes | + User profile, feedback, business context, tool registry |
| Who controls it | Mostly AI | Mostly you |
| Portable | No | Yes — clone templates to any project |
| Feedback loop | Implicit | Explicit — Why + How to Apply pattern |

This is **not a replacement** for Claude Code's memory. It's a layer of organization on top of it.

---

## Use Cases

Works for anyone who wants more control over what Claude remembers:

- **Solo founders** — Track products, clients, revenue goals, priorities across sessions
- **Developers** — Maintain architecture decisions, codebase conventions, debugging playbooks
- **Content creators** — Preserve brand voice, audience rules, platform-specific guidelines
- **Freelancers** — Keep per-client context, deliverables, communication preferences
- **Researchers** — Organize sources, methodology, findings, open questions
- **Teams** — Share memory templates via git for consistent AI context

---

## Memory Types

### 1. User
Who you are. Role, skills, preferences, communication style.

```markdown
---
name: User Profile
description: User background, role, preferences
type: user
---

- Role: Solo founder
- Tools: Mac mini M4, Claude Code, VS Code
- Language: Traditional Chinese for chat, English for code
```

Claude's auto memory stores code preferences. User memory adds **who you are** — so Claude calibrates responses to your experience level and working style.

### 2. Feedback
Your corrections and confirmations. What to stop, what to keep.

```markdown
---
name: Quality First
description: Always prioritize quality over speed
type: feedback
---

Deliver quality over speed — check your own work before sending.

**Why:** Sloppy output that looked done but had issues eroded trust.
**How to apply:** Before delivering, ask "would the user be satisfied seeing this?"
```

The **Why + How to Apply** pattern is the key difference. Native memory might note "user prefers quality" — but without the reason and application rule, Claude can't judge edge cases.

### 3. Project
Active work, goals, decisions, business context.

```markdown
---
name: Product Goals
description: Current products, priorities, direction
type: project
---

## Products
- Product A: Live, 500+ users
- Product B: MVP, onboarding first 10 customers

## Current Priority
Ship Product B. Fix onboarding drop-off in Product A.
```

Native memory captures technical patterns. Project memory adds **business context** — goals, client info, strategic decisions that shape what Claude should prioritize.

### 4. Reference
Where things are. Tools, services, APIs, accounts.

```markdown
---
name: Dev Stack
description: Tools and services for this project
type: reference
---

- Database: Supabase (project: xxx)
- Hosting: Vercel
- Auth: NextAuth + LINE Login
- CI/CD: GitHub Actions
```

Saves Claude from rediscovering your stack every session. Especially useful when you have multiple services, APIs, or tools with specific configurations.

---

## Architecture

```
~/.claude/
├── CLAUDE.md                          # Your instructions (native feature)
└── projects/-/memory/                 # Auto memory directory (native feature)
    ├── MEMORY.md                      # Index — links + one-line descriptions
    ├── user_profile.md                # [Framework] Who you are
    ├── feedback_*.md                  # [Framework] Corrections & confirmations
    ├── project_*.md                   # [Framework] Business context & goals
    ├── reference_*.md                 # [Framework] Tools & services
    └── (other auto-memory files)      # [Native] Claude's own notes
```

The framework coexists with native auto memory. Claude's own notes stay alongside your structured files.

---

## Quick Start

### 1. Create the memory directory (if it doesn't exist)

```bash
mkdir -p ~/.claude/projects/-/memory
```

### 2. Copy the templates

```bash
git clone https://github.com/HUANGCHIHHUNGLeo/claude-memory-framework.git
cp claude-memory-framework/templates/* ~/.claude/projects/-/memory/
```

### 3. Add boot instructions to CLAUDE.md

Add to your `~/.claude/CLAUDE.md`:

```markdown
## Memory

On session start, read ~/.claude/projects/-/memory/MEMORY.md and load relevant memories for the current task.
```

### 4. Customize

Edit the template files to match your situation:
- `user_profile.md` — your role and preferences
- `project_goals.md` — what you're building
- `reference_tools.md` — your tools and services

### 5. Use it

Claude reads the index, loads what's relevant, and operates with your structured context. When you correct Claude, tell it to save a feedback memory. When goals change, update the project file.

---

## Templates

```
templates/
├── MEMORY.md                    # Index template
├── CLAUDE.md.example            # Boot instructions example
├── user_profile.md              # User profile template
├── feedback_communication.md    # Communication rules template
├── feedback_quality.md          # Quality standards template
├── project_goals.md             # Project goals template
├── reference_tools.md           # Tools & services template
└── system_architecture.md       # System overview template
```

---

## Advanced

### Extension Points
The four core types cover most needs. Common additions:
- `playbook_*.md` — domain-specific strategies and rules
- `status_*.md` — handoff state between sessions or people
- `experiment_*.md` — A/B test results and learnings
- `client_*.md` — per-client context for freelancers

### Team Use
Share templates via git. Everyone starts with the same structured context. Individual feedback memories stay personal; project and reference memories are shared.

### Multi-Project
Use project-scoped memory directories (`~/.claude/projects/<project>/memory/`) for project-specific context, and global memory (`~/.claude/projects/-/memory/`) for cross-project preferences.

---

## How This Compares

**vs. Native auto memory alone:** You get categorization, frontmatter metadata, explicit feedback loops, and human-curated indexing instead of AI-decided structure.

**vs. Obsidian + Claude setups:** No extra software needed. Works inside Claude Code natively. Plain markdown files, no plugins or bridges.

**vs. Vector-based memory systems (Durafen, HMLR):** Much simpler. No database, no embeddings, no infrastructure. Just organized markdown files. The tradeoff: no semantic search, but Claude's built-in file reading handles the lookup.

**vs. Session lifecycle managers (cog, atlas):** Complementary. Those focus on session handoff and state management. This focuses on what knowledge persists and how it's structured.

---

## Philosophy

> The best memory system is one you actually maintain.

Complex memory architectures with vector databases and embedding pipelines sound impressive but add friction. This framework uses plain markdown because it's easy to read, edit, review, and version control. If you stop maintaining it, the files are still readable. If Claude's auto memory improves, the templates still add value as a human-curated layer.

---

## Contributing

Found a better way to structure memories? Open a PR.

---

## License

MIT

---

## Links

- [LeoAIdo](https://leoaido.com) — Products, free resources, and guides
- [Memory Framework Guide](https://leoaido.com/memory/) — Visual guide (Chinese)
- [gstack Guide](https://leoaido.com/gstack/) — Claude Code skill pack
- [Threads @kanisleo328](https://www.threads.net/@kanisleo328) — AI insights & building in public

---

Built with Claude Code by [Leo Huang (黃志弘)](https://leoaido.com)
