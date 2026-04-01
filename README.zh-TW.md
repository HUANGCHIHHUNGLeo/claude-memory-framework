# Claude Memory Framework

繁體中文 | [English](README.md)

**把 Claude Code 變成你的商業助理 — 不需要寫程式。**

工程師有 [everything-claude-code](https://github.com/affaan-m/everything-claude-code)，27 個 agent、64 個技能。這個框架是給其他人的 — 小型創業者、接案者、內容創作者、獨立創辦人，想讓 AI 記住你的生意，不只是你的程式碼。

Claude Code 本身就有持久記憶，但它只記得 code 模式。這個框架加上**商業記憶** — 你的客戶、內容策略、定價決策、學到的教訓。結構化模板，任何人都能填，不需要寫程式。

由 [@kanisleo328](https://www.threads.net/@kanisleo328) 開發。這是 [LeoAIdo](https://leoaido.com) 背後的系統。

---

## 問題

Claude Code 的 auto memory 很強但沒有結構。Claude 自己決定存什麼、怎麼組織。用久了就是一堆格式不一的筆記，沒有分類，也無法確保重要的東西一定會被載入。

常見問題：
- Claude 記住了 code 慣例，但忘了你的商業目標
- 記憶檔案越長越亂，難以檢視或編輯
- 沒有標準方法捕捉糾正，同樣的錯重複犯
- 換專案時要從零重建脈絡

---

## 這個框架做什麼

在 Claude Code 原生記憶系統上面加一層**模板和規範**。

| 面向 | 原生 Auto Memory | + 本框架 |
|------|-----------------|----------|
| 儲存位置 | `~/.claude/projects/-/memory/` | 同一個位置 |
| 索引 | MEMORY.md（AI 寫的） | MEMORY.md（人整理的） |
| 結構 | 自由格式，AI 決定 | 7 種分類 + YAML frontmatter |
| 存什麼 | code 模式、debug 筆記 | + 使用者偏好、回饋、商業脈絡、工具登記 |
| 誰控制 | 主要是 AI | 主要是你 |
| 可移植 | 否 | 部分 — 模板可重用，個人記憶需重新填寫 |
| 回饋迴路 | 隱性 | 顯性 — Why + How to Apply 模式 |

這**不是取代** Claude Code 的記憶，是在上面加一層組織結構。

---

## 適用場景

適合任何想更好控制 Claude 記憶的人：

- **獨立創辦人** — 跨 session 追蹤產品、客戶、營收目標
- **開發者** — 維護架構決策、程式碼慣例、debug playbook
- **內容創作者** — 保存品牌語氣、受眾規則、平台策略
- **接案者** — 保持每個客戶的脈絡、交付物、溝通偏好
- **研究者** — 整理資料來源、方法論、發現
- **團隊** — 透過 git 共享記憶模板

---

## 記憶類型

### 1. Soul（靈魂）
AI 助手的核心原則和身份定義。
> 定義 AI 怎麼做事 — 品質標準、誠實原則、主動性。新 session 一開始就載入。

### 2. User（使用者）
你是誰。角色、技能、偏好、溝通風格。
> 原生記憶存 code 偏好，User 記憶加上**你是誰**。

### 3. Feedback（回饋）
你的糾正和肯定。該停止什麼、該繼續什麼。
> **Why + How to Apply** 模式讓 Claude 能判斷邊界情況，不只是記住規則。

### 4. Project（專案）
正在做的事、目標、決策、商業脈絡。
> 原生記憶存技術模式，Project 記憶加上**商業脈絡**。

### 5. Content（內容）
社群內容排程、平台規則、已驗證的做法。
> 管理多平台發文策略，不用每次重新說明。

### 6. Status（狀態）
過夜或換班時的工作交接紀錄。
> 確保新 session 知道上次做到哪、什麼在等回覆、明天要做什麼。

### 7. Reference（參考）
工具在哪、服務怎麼連、API 位置。
> 省掉每次重新找你的技術棧的時間。

---

## 快速開始

### 方法 1：用安裝腳本（推薦）

```bash
git clone https://github.com/HUANGCHIHHUNGLeo/claude-memory-framework.git
cd claude-memory-framework
bash install.sh
```

### 方法 2：手動安裝

#### 1. 建立記憶資料夾（如果還沒有）

```bash
mkdir -p ~/.claude/projects/-/memory
```

#### 2. 複製模板

```bash
git clone https://github.com/HUANGCHIHHUNGLeo/claude-memory-framework.git
cp claude-memory-framework/templates/* ~/.claude/projects/-/memory/
```

#### 3. 在 CLAUDE.md 加開機指令

在 `~/.claude/CLAUDE.md` 加入：

```markdown
## Memory
每次 session 啟動，讀取 ~/.claude/projects/-/memory/MEMORY.md，根據當前任務載入相關記憶。
```

#### 4. 客製化

編輯模板檔案，改成你的情況。

---

## Hooks（自動化）

Claude Code 支援 hooks — 在特定事件發生時自動執行腳本。本框架包含兩個 hook：

| Hook | 觸發時機 | 做什麼 |
|------|---------|--------|
| session-start | 開新 session | 載入記憶索引，顯示上次狀態 |
| session-end | session 結束 | 自動存當前工作狀態到 status_handoff.md |

安裝 hooks：

```bash
# 在你的專案根目錄
mkdir -p .claude/hooks
cp hooks/hooks.json .claude/settings.json
cp scripts/session-start.js .claude/hooks/
cp scripts/session-end.js .claude/hooks/
```

純 Node.js，不需要 npm install，不連網路。詳細說明見 [hooks/README.md](hooks/README.md)。

---

## 跟其他方案怎麼比

**vs 只用原生 auto memory：** 多了分類、frontmatter、顯性回饋迴路、人整理的索引。

**vs Obsidian + Claude：** 不需要額外軟體。在 Claude Code 裡原生運作。純 markdown，不需要插件或橋接。

**vs 向量記憶系統（Durafen, HMLR）：** 簡單很多。沒有資料庫、沒有 embedding、沒有基礎設施。代價：沒有語意搜尋，但 Claude 的檔案讀取能力足以處理查找。

**vs Session 管理器（cog, atlas）：** 互補。那些專注 session 交接，這個專注知識結構和分類。

---

## 理念

> 最好的記憶系統是你真的會維護的那個。

複雜的向量資料庫和 embedding pipeline 聽起來很厲害但增加摩擦力。這個框架用純 markdown，因為好讀、好改、好版控。就算 Claude 的 auto memory 未來變更強，人整理的這層結構還是有價值。

---

## 貢獻

發現更好的記憶組織方式？歡迎開 PR。

---

## 授權

MIT

---

## 連結

- [LeoAIdo](https://leoaido.com) — 產品、免費資源、教學
- [Memory 使用指南](https://leoaido.com/memory/) — 視覺化說明（中文）
- [gstack 安裝指南](https://leoaido.com/gstack/) — Claude Code 技能包
- [Threads @kanisleo328](https://www.threads.net/@kanisleo328) — AI 觀點 + 一人公司

---

用 Claude Code 打造，by [Leo Huang（黃志弘）](https://leoaido.com)
