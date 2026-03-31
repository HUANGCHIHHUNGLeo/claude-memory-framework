# Claude Memory Framework

[繁體中文](README.zh-TW.md) | English

**A persistent memory system for Claude Code that turns it into your AI operating system.**

Most Claude Code setups forget everything between sessions. This framework gives Claude structured, persistent memory — so it knows who you are, what you've built, what works, and what doesn't. Across every session.

Built by [@kanisleo328](https://www.threads.net/@kanisleo328) — running a one-person company with an AI team for 8 months. This is the actual system behind [LeoAIdo](https://leoaido.com).

---

## What Makes This Different

Every other Claude Code memory repo focuses on **coding assistance**. This one is for running a **business**.

| Feature | Others | This Framework |
|---------|--------|----------------|
| Session persistence | Some | ✅ Full |
| Code-level memory | ✅ | ✅ |
| Identity & persona | ❌ | ✅ AI knows who it is |
| User profile & preferences | ❌ | ✅ Adapts to you |
| Feedback-driven evolution | ❌ | ✅ Learns from corrections |
| Business context | ❌ | ✅ Goals, clients, revenue |
| Multi-platform management | ❌ | ✅ Social, content, deploy |
| Scheduling & autonomy | ❌ | ✅ Cron, reports, routines |
| Tool orchestration | ❌ | ✅ Which tool does what |
| Indexed & categorized | ❌ | ✅ Fast lookup, no bloat |

---

## Architecture

```
~/.claude/
├── CLAUDE.md                          # Boot instructions — AI reads this first
└── projects/-/memory/
    ├── MEMORY.md                      # Index file — links to all memories
    ├── user_profile.md                # Who you are
    ├── feedback_communication.md      # How to talk to you
    ├── feedback_quality.md            # Quality standards
    ├── feedback_*.md                  # More behavioral rules
    ├── project_goals.md              # What you're building & why
    ├── project_*.md                   # Active projects & status
    ├── reference_tools.md            # External tools & services
    ├── reference_*.md                 # More reference pointers
    ├── status_current.md             # Latest system state
    └── system_architecture.md         # How everything connects
```

---

## Memory Types

### 1. User Memory
Who you are. Your role, skills, preferences, communication style.

```markdown
---
name: User Profile
description: User background, role, preferences
type: user
---

- Role: Solo founder, non-engineering background
- Tools: Mac mini M4, Claude Code, Telegram
- Language: Traditional Chinese for communication
- Experience: 8 months building with AI
```

**Why it matters:** Claude treats a senior engineer differently from a first-time builder. User memory makes every response calibrated to you.

### 2. Feedback Memory
Your corrections AND confirmations. What to stop doing, what to keep doing.

```markdown
---
name: Quality First
description: Always prioritize quality over speed
type: feedback
---

Deliver quality over speed — check your own work before sending.

**Why:** User got burned by sloppy output that looked done but had issues.
**How to apply:** Before delivering anything, ask yourself "would the user be satisfied seeing this?"
```

**Why it matters:** Without feedback memory, you correct the same mistake every session. With it, the AI learns once and remembers forever.

### 3. Project Memory
Active work, goals, decisions, client info, business context.

```markdown
---
name: Product Goals
description: Current products, revenue targets, business direction
type: project
---

## Products
- Product A: Live, 500+ users
- Product B: MVP, first paying client
- Product C: In development

## Revenue Target
- Q2: NT$30K/month
- 3-year: $10M USD

**Why:** All decisions should move toward revenue and product-market fit.
**How to apply:** Prioritize work that directly generates revenue or grows user base.
```

**Why it matters:** Claude understands the big picture. It won't suggest spending a week on a nice-to-have when you need to close a client.

### 4. Reference Memory
Where things are. External tools, services, accounts, URLs.

```markdown
---
name: Local Tools
description: Tools and services running on local machine
type: reference
---

- Image generation API: localhost:5100
- Voice synthesis: ChatTTS (seed=50)
- Content management: localhost:3001
- Browser automation: CDP on port 9222
```

**Why it matters:** Claude doesn't waste time searching for things it already knows the location of.

---

## How It Works

### Boot Sequence
1. New session starts → Claude reads `CLAUDE.md`
2. `CLAUDE.md` tells it to read `MEMORY.md` (the index)
3. Claude scans index, loads relevant memories for current context
4. Claude operates with full context of who you are, what you're building, and how you work

### Learning Loop
1. You correct Claude → it saves a **feedback** memory
2. You share a new goal → it saves a **project** memory
3. You mention a tool → it saves a **reference** memory
4. Next session → Claude reads these and doesn't repeat mistakes

### Memory Index (MEMORY.md)
The index is always loaded. It contains only links and one-line descriptions — never the actual content. This keeps context small while making everything findable.

```markdown
# Memory Index

## User
- [user_profile.md](user_profile.md) - Role, preferences, background

## Feedback
- [feedback_quality.md](feedback_quality.md) - Quality over speed
- [feedback_communication.md](feedback_communication.md) - Communication rules

## Projects
- [project_goals.md](project_goals.md) - Revenue targets, active products

## References
- [reference_tools.md](reference_tools.md) - Local services and APIs
```

---

## Quick Start

### 1. Create the memory directory

```bash
mkdir -p ~/.claude/projects/-/memory
```

### 2. Copy the templates

```bash
git clone https://github.com/HUANGCHIHHUNGLeo/claude-memory-framework.git
cp claude-memory-framework/templates/* ~/.claude/projects/-/memory/
```

### 3. Edit CLAUDE.md

Add this to your `~/.claude/CLAUDE.md`:

```markdown
## Boot Sequence

Every session, read these first:
1. Read: ~/.claude/projects/-/memory/MEMORY.md
2. Load relevant memories based on current task
```

### 4. Customize your memories

Edit the template files to match your situation:
- `user_profile.md` — your role and preferences
- `project_goals.md` — what you're building
- `reference_tools.md` — your tools and services

### 5. Start a session

Claude will automatically read your memories and operate with full context.

---

## Templates Included

```
templates/
├── MEMORY.md                    # Index template
├── CLAUDE.md.example            # Boot instructions example
├── user_profile.md              # User profile template
├── feedback_communication.md    # Communication rules template
├── feedback_quality.md          # Quality standards template
├── project_goals.md             # Business goals template
├── reference_tools.md           # Tools & services template
└── system_architecture.md       # System overview template
```

---

## Advanced: One-Person Company Setup

This framework was designed for running a one-person company with AI. Here's the full setup:

### Identity System
Define who your AI is in `CLAUDE.md`. Not just rules — give it a role, principles, and a relationship to you.

### Scheduling
Use Claude Code's cron system for autonomous behavior:
- Morning reports
- Content scheduling
- Periodic learning and analysis
- Health checks

### Multi-Platform Content
Manage multiple social accounts with platform-specific rules:
- Different tone per platform
- Posting schedules
- Engagement strategies
- Analytics tracking

### Client Management
Track client relationships, quotes, deliverables in project memories. Claude remembers every conversation context.

---

## Real Results

This system powers [@kanisleo328](https://www.instagram.com/kanisleo328):
- 3 products built in 8 months with zero coding background
- Automated social media posting across Threads, IG, Facebook
- 16,000+ views on a single Threads post
- 199 unique visitors to personal site in one day from organic content
- First paying client acquired through AI-powered workflow

---

## Philosophy

> Memory is what turns a chatbot into a teammate.

Without memory, every session starts from zero. You re-explain yourself, re-state your goals, re-correct the same behaviors. It's like hiring someone new every day.

With this framework, Claude Code becomes something else — an AI that knows your business, respects your preferences, learns from its mistakes, and gets better over time.

---

## Contributing

Found a better way to structure memories? Open a PR. This framework evolves the same way the memories do — through feedback.

---

## License

MIT — use it however you want.

---

## Links

- [LeoAIdo](https://leoaido.com) — Products, free resources, and guides
- [Vibe Coding Guide](https://leoaido.com/vibecoding/) — 7 tips from Anthropic's official docs
- [gstack Guide](https://leoaido.com/gstack/) — Claude Code skill pack installation
- [Threads @kanisleo328](https://www.threads.net/@kanisleo328) — AI insights & one-person company journey

---

Built with Claude Code by [Leo Huang (黃志弘)](https://leoaido.com) — One-person company + AI team.
