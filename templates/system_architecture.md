---
name: System Architecture
description: How the full system connects — services, scheduling, data flow
type: reference
---

## Overview
[Describe your overall system — e.g., Claude Code as the brain, connected to Telegram for communication, cron for scheduling, APIs for content generation]

## Core Components
1. **AI Brain** — Claude Code with persistent memory
2. **Communication** — [e.g., Telegram channels for different purposes]
3. **Content Generation** — [e.g., Image API, Video API, Voice synthesis]
4. **Publishing** — [e.g., Auto-post scripts for social media]
5. **Monitoring** — [e.g., Health checks, analytics, visitor tracking]

## Scheduling
- [e.g., Every 12 hours: memory checkpoint]
- [e.g., Daily 7:30: morning report]
- [e.g., Daily 8:00 & 20:00: auto-publish]
- [e.g., Every 5 min: comment reply check]

## Data Flow
```
User (Telegram) → Claude Code → Memory System
                              → Content APIs → Social Platforms
                              → Cron Jobs → Automated Tasks
                              → Dev Projects → Vercel Deploy
```
