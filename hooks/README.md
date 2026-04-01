# Hooks — 自動化記憶管理

Claude Code 支援 hooks — 在特定事件發生時自動執行腳本。

## 包含的 Hooks

| Hook | 觸發時機 | 做什麼 |
|------|---------|--------|
| session-start | 開新 session | 載入記憶索引，顯示上次狀態 |
| session-end | session 結束 | 自動存當前工作狀態到 status_handoff.md |

## 安裝方式

### 方法 1：複製到專案（推薦）

```bash
# 在你的專案根目錄
mkdir -p .claude/hooks
cp hooks/hooks.json .claude/settings.json
cp scripts/session-start.js .claude/hooks/
cp scripts/session-end.js .claude/hooks/
```

### 方法 2：全域安裝

```bash
mkdir -p ~/.claude/hooks
cp scripts/session-start.js ~/.claude/hooks/
cp scripts/session-end.js ~/.claude/hooks/
```

然後在 `~/.claude/settings.json` 裡加入 hooks 設定。

## 特色

- **純 Node.js** — 不需要 npm install，沒有外部依賴
- **不會覆蓋手動內容** — 自動存檔只更新 `<!-- AUTO-SAVE -->` 標記以下的部分
- **跨平台** — Windows、macOS、Linux 都能跑
- **安全** — 只讀寫本地記憶檔案，不連網路
