# Claude Memory Framework

**讓 Claude Code 擁有持久記憶，變成你的 AI 作業系統。**

大部分的 Claude Code 設定，每次開新 session 就忘光光。這個框架給 Claude 一套結構化的持久記憶 — 讓它記住你是誰、你在做什麼、什麼方法有用、什麼該避免。跨 session 都記得。

由 [@kanisleo328](https://www.threads.net/@kanisleo328) 開發 — 用 AI 跑一人公司 8 個月的實戰系統。這就是 [LeoAIdo](https://leoaido.com) 背後的真實架構。

---

## 跟別人的有什麼不同

市面上的 Claude Code 記憶系統都是為了「寫程式」設計的。這個是為了「經營事業」。

| 功能 | 其他方案 | 本框架 |
|------|---------|--------|
| 跨 session 記憶 | 部分有 | ✅ 完整 |
| 程式碼記憶 | ✅ | ✅ |
| 身份與人設 | ❌ | ✅ AI 知道自己是誰 |
| 使用者偏好 | ❌ | ✅ 適應你的風格 |
| 回饋驅動學習 | ❌ | ✅ 從糾正中學習 |
| 商業脈絡 | ❌ | ✅ 目標、客戶、營收 |
| 多平台管理 | ❌ | ✅ 社群、內容、部署 |
| 排程自主行為 | ❌ | ✅ 定時任務、報告 |
| 工具分工 | ❌ | ✅ 哪個工具做什麼 |
| 索引分類 | ❌ | ✅ 快速查找不臃腫 |

---

## 架構

```
~/.claude/
├── CLAUDE.md                          # 開機指令 — AI 第一個讀這個
└── projects/-/memory/
    ├── MEMORY.md                      # 索引檔 — 連結到所有記憶
    ├── user_profile.md                # 你是誰
    ├── feedback_communication.md      # 怎麼跟你溝通
    ├── feedback_quality.md            # 品質標準
    ├── feedback_*.md                  # 更多行為規則
    ├── project_goals.md              # 你在做什麼、為什麼
    ├── project_*.md                   # 進行中的專案
    ├── reference_tools.md            # 外部工具和服務
    ├── reference_*.md                 # 更多參考資訊
    ├── status_current.md             # 最新系統狀態
    └── system_architecture.md         # 所有東西怎麼接的
```

---

## 四種記憶類型

### 1. User（使用者記憶）
你是誰。角色、技能、偏好、溝通風格。
→ 讓 Claude 知道怎麼跟你配合。

### 2. Feedback（回饋記憶）
你的糾正和肯定。該停止什麼、該繼續什麼。
→ 同樣的錯不會犯第二次。

### 3. Project（專案記憶）
正在做的事、商業目標、客戶資訊、重要決定。
→ Claude 理解大局，不只看眼前任務。

### 4. Reference（參考記憶）
工具在哪、服務怎麼連、帳號和 API 位置。
→ 不用每次重新找。

---

## 快速開始

### 1. 建立記憶資料夾

```bash
mkdir -p ~/.claude/projects/-/memory
```

### 2. 複製模板

```bash
git clone https://github.com/HUANGCHIHHUNGLeo/claude-memory-framework.git
cp claude-memory-framework/templates/* ~/.claude/projects/-/memory/
```

### 3. 編輯 CLAUDE.md

在 `~/.claude/CLAUDE.md` 加入：

```markdown
## 開機設定
每次 session 啟動後：
1. 讀取：~/.claude/projects/-/memory/MEMORY.md
2. 根據當前任務載入相關記憶
```

### 4. 客製化你的記憶

編輯模板檔案，改成你的情況：
- `user_profile.md` — 你的角色和偏好
- `project_goals.md` — 你在做什麼
- `reference_tools.md` — 你的工具和服務

---

## 實戰成果

這個系統驅動 [@kanisleo328](https://www.instagram.com/kanisleo328)：
- 零程式基礎，8 個月做出 3 個產品
- Threads / IG / Facebook 自動發文
- 單篇貼文 16,000+ 瀏覽
- 一天 199 個獨立訪客到個人網站
- 成功接到第一個付費客戶

---

## 理念

> 記憶是把聊天機器人變成隊友的關鍵。

沒有記憶，每次 session 都從零開始。你要重新解釋自己、重新說明目標、重新糾正同樣的行為。就像每天僱一個新人。

有了這個框架，Claude Code 變成另一種東西 — 一個了解你的事業、尊重你的偏好、從錯誤中學習、越來越好的 AI。

---

## 授權

MIT — 隨便用。

---

## 連結

- [LeoAIdo](https://leoaido.com) — 產品、免費資源、教學
- [Vibe Coding 懶人包](https://leoaido.com/vibecoding/) — 7 個技巧
- [gstack 安裝指南](https://leoaido.com/gstack/) — Claude Code 技能包
- [Threads @kanisleo328](https://www.threads.net/@kanisleo328) — AI 觀點 + 一人公司

---

用 Claude Code 打造，by [Leo Huang（黃志弘）](https://leoaido.com) — 一人公司 + AI 團隊。
