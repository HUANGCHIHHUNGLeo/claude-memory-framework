#!/bin/bash
# Claude Memory Framework — Install Script
# Copies templates and hooks to the right places.

set -e

MEMORY_DIR="$HOME/.claude/projects/-/memory"
HOOKS_DIR="$HOME/.claude/hooks"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Claude Memory Framework — Installer"
echo "====================================="
echo ""

# --- Templates ---
echo "[1/3] Installing memory templates..."

if [ -d "$MEMORY_DIR" ]; then
    echo "  Memory directory exists: $MEMORY_DIR"
    echo "  Existing files will NOT be overwritten."
    for f in "$SCRIPT_DIR"/templates/*; do
        fname="$(basename "$f")"
        if [ -f "$MEMORY_DIR/$fname" ]; then
            echo "  SKIP: $fname (already exists)"
        else
            cp "$f" "$MEMORY_DIR/$fname"
            echo "  COPY: $fname"
        fi
    done
else
    mkdir -p "$MEMORY_DIR"
    cp "$SCRIPT_DIR"/templates/* "$MEMORY_DIR/"
    echo "  Created $MEMORY_DIR and copied all templates."
fi

echo ""

# --- Hooks ---
echo "[2/3] Installing hooks..."

mkdir -p "$HOOKS_DIR"

for f in session-start.js session-end.js; do
    if [ -f "$HOOKS_DIR/$f" ]; then
        echo "  SKIP: $f (already exists in $HOOKS_DIR)"
    else
        cp "$SCRIPT_DIR/scripts/$f" "$HOOKS_DIR/$f"
        echo "  COPY: $f -> $HOOKS_DIR/"
    fi
done

SETTINGS_FILE="$HOME/.claude/settings.json"
if [ -f "$SETTINGS_FILE" ]; then
    echo "  NOTE: $SETTINGS_FILE already exists."
    echo "        Merge hooks config manually from hooks/hooks.json if needed."
else
    cp "$SCRIPT_DIR/hooks/hooks.json" "$SETTINGS_FILE"
    echo "  COPY: hooks.json -> $SETTINGS_FILE"
fi

echo ""

# --- CLAUDE.md hint ---
echo "[3/3] Checking CLAUDE.md..."

CLAUDE_MD="$HOME/.claude/CLAUDE.md"
if [ -f "$CLAUDE_MD" ]; then
    if grep -q "MEMORY.md" "$CLAUDE_MD" 2>/dev/null; then
        echo "  CLAUDE.md already references MEMORY.md. No changes needed."
    else
        echo "  TIP: Add the following to $CLAUDE_MD:"
        echo ""
        echo "    ## Memory"
        echo "    On session start, read ~/.claude/projects/-/memory/MEMORY.md"
        echo "    and load relevant memories for the current task."
        echo ""
    fi
else
    echo "  No CLAUDE.md found. You can create one at $CLAUDE_MD"
    echo "  See templates/CLAUDE.md.example for a starting point."
fi

echo ""
echo "Done! Edit the template files in $MEMORY_DIR to match your situation."
