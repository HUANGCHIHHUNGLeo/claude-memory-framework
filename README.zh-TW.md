# Claude Memory Framework

繁體中文 | [English](README.md)

**讓 Claude Code 擁有持久記憶，變成你的 AI 作業系統。**

大部分的 Claude Code 設定，每次開新 session 就忘光光。這個框架給 Claude 一套結構化的持久記憶 — 讓它記住你是誰、你在做什麼、什麼方法有用、什麼該避免。跨 session 都記得。

由 [@kanisleo328](https://www.threads.net/@kanisleo328) 開發 — 用 AI 跑一人公司 8 個月的實戰系統。這就是 [LeoAIdo](https://leoaido.com) 背後的真實架構。

---

## 跟別人的有什麼不同

市面上的 Claude Code 記憶系統都只做「寫程式輔助」。這個把 Claude 當成**長期合作夥伴**。

| 功能 | 其他方案 | 本框架 |
|------|---------|--------|
| 跨 session 記憶 | 部分有 | ✅ 完整 |
| 程式碼記憶 | ✅ | ✅ |
| 身份與人設 | ❌ | ✅ AI 知道自己是誰 |
| 使用者偏好 | ❌ | ✅ 適應你的風格 |
| 回饋驅動學習 | ❌ | ✅ 從糾正中學習 |
| 專案與商業脈絡 | ❌ | ✅ 目標、決策、進度 |
| 工具與服務登記 | ❌ | ✅ 記住你的技術棧 |
| 索引分類 | ❌ | ✅ 快速查找不臃腫 |

---

## 適用場景

只要你不是用 Claude Code 做一次性任務，這個框架都適用：

- **獨立創辦人** — Claude 記住你的產品、客戶、營收目標、優先順序
- **開發者** — Claude 記住程式碼慣例、過去的 debug 經驗、架構決策
- **內容創作者** — Claude 記住你的品牌語氣、受眾、發布排程、平台規則
- **接案者** — Claude 記住每個客戶的脈絡、交付物、溝通偏好
- **研究者** — Claude 記住你的資料來源、方法論、發現、待解問題
- **團隊** — 共享記憶檔案讓多人用同一套脈絡

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
正在做的事、目標、決策、任何你在做的專案脈絡。
→ Claude 理解大局，不只看眼前任務。

### 4. Reference（參考記憶）
工具在哪、服務怎麼連、API 位置、技術棧。
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

## 進階用法

### 身份系統
在 `CLAUDE.md` 定義 AI 的角色、核心原則、跟你的關係。不只是規則 — 給它人格。

### 排程與自動化
搭配 Claude Code 的 cron 系統：
- 定期狀態報告
- 自動健康檢查
- 排程任務執行
- 定時記憶存檔

### 多專案管理
每個專案用獨立記憶目錄，或共用全域記憶。索引模式從一個專案擴展到幾十個都行。

### 團隊協作
透過 git 共享記憶檔案。新成員（人或 AI）讀完索引就有完整脈絡。

### 擴充點
框架設計成可擴充：
- `playbook_*.md` — 領域專屬規則和策略
- `status_*.md` — 過夜狀態或交接紀錄
- `experiment_*.md` — A/B 測試結果和學習
- `client_*.md` — 接案者的個別客戶脈絡

---

## 實戰成果

這個系統驅動 [@kanisleo328](https://www.instagram.com/kanisleo328)：
- 零程式基礎，8 個月做出 3 個產品並持續維護
- 所有開發、部署、專案管理都透過帶記憶的 Claude Code 完成
- 單篇貼文 19,000+ 瀏覽
- 成功接到第一個付費客戶

---

## 理念

> 記憶是把聊天機器人變成隊友的關鍵。

沒有記憶，每次 session 都從零開始。你要重新解釋自己、重新說明目標、重新糾正同樣的行為。就像每天僱一個新人。

有了這個框架，Claude Code 變成另一種東西 — 一個了解你的工作、尊重你的偏好、從錯誤中學習、越來越好的 AI。

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
