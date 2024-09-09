# 面试宝典 interview-guide

## 核心功能

- 面试刷题
  - 可以根据薄弱的知识点进行刷题推荐
- 面试题库
- 测验
- 错题集
- 标记学会了
- 题目收藏
- 题目搜索

您的 Prisma schema 设计非常不错，它涵盖了技术面试题宝典项目的核心功能，并且结构清晰。让我分析一下这个设计的优点和可能的改进点：
优点：

使用 UUID 作为 User 表的主键，提高了安全性和唯一性。
分离了 Category 和 QuestionType，允许更灵活的题目分类。
UserQuestionState 模型很好地捕捉了用户与题目之间的关系。
Quiz 和 QuizQuestion 模型设计合理，支持测验功能。
使用了适当的关系类型（一对多、多对多）。

可能的改进点：

考虑添加索引以优化查询性能，特别是对于经常查询的字段。
可以添加一个 Tag 模型，用于更灵活的题目标记和搜索。
考虑添加一个错题集模型，方便用户快速复习错误的题目。
可以在 User 模型中添加一些统计字段，如总分、完成题目数等。

基于这些考虑，我建议对您的 schema 做一些小的调整和添加。以下是修改后的版本：
Updated Prisma Schema for Interview Question BankClick to open code
主要的改动和添加包括：

1. 在 User 模型中添加了 totalScore 和 completedQuestions 字段，用于跟踪用户的整体进度。添加了 Tag 和 TagsOnQuestions 模型，支持更灵活的题目标记和搜索。
2. 在 UserQuestionState 模型中添加了 lastAttemptAt 字段，记录最后尝试时间。添加了 ErrorCollection 模型，用于管理用户的错题集。
3. 在 Question 模型中为 categoryId 和 questionTypeId 添加了复合索引，优化查询性能。
4. 在 UserQuestionState 模型中为 userId 和 status 添加了索引，方便按用户和状态快速查询。
5. 在 Quiz 模型中添加了 createdAt 字段，记录测验创建时间。

这些改动使得数据模型更加完善，能够更好地支持您描述的核心功能，如面试刷题、根据薄弱知识点推荐、错题集、标记学会等。同时，新增的索引和统计字段将有助于提高查询性能和用户体验。
您对这些修改有什么看法？是否还有其他功能或需求需要在数据模型中体现？

## 接口

- [ ] 题目列表

## TO DO

- [ ] 完善题目数量 50道题
- [ ] 题目录入工具
- [ ] 完善题库数据结构
- [ ] 题目类型
- [ ] 题目难度
- [ ] 题目来源
- [ ] 题目标签
- [ ] 题目答案
- [ ] 题目解析
- [ ] 题目选项
- [ ] 题目题干
- [ ] 题目ID
- [ ] 题目创建时间
- [ ] 题目更新时间
- [ ] 题目所属科目
- [ ] 题目所属章节
- [ ] 题目所属知识点
- [ ] 题目所属题库
- [ ] 集成代码编辑器Monaco https://microsoft.github.io/monaco-editor/
- [ ] Monaco多语言支持
- [ ] Monaco主题切换
- [ ] Monaco代码高亮
- [ ] Monaco代码折叠
- [ ] Monaco代码自动补全
- [ ] Monaco代码格式化

## 题库管理

- [ ] 题库列表
- [ ] 题库详情
- [ ] 题库编辑
- [ ] 题库删除
- [ ] 题库导入
- [ ] 题库导出

## 题目管理

- [ ] 题目列表
- [ ] 题目详情
- [ ] 题目编辑
- [ ] 题目删除
- [ ] 题目导入
- [ ] 题目导出

## 用户管理

- [ ] 用户列表
- [ ] 用户详情
- [ ] 用户编辑
- [ ] 用户删除
- [ ] 用户导入
- [ ] 用户导出

## 权限管理

- [ ] 角色列表
- [ ] 角色详情
- [ ] 角色编辑
- [ ] 角色删除
- [ ] 角色导入
- [ ] 角色导出

## 日志管理

- [ ] 日志列表
- [ ] 日志详情
- [ ] 日志编辑
- [ ] 日志删除
- [ ] 日志导入
- [ ] 日志导出

## 系统设置

- [ ] 系统设置列表
- [ ] 系统设置详情
- [ ] 系统设置编辑
- [ ] 系统设置删除
- [ ] 系统设置导入
- [ ] 系统设置导出

## 其他

## Features

- 💚 [Nuxt 3](https://nuxt.com/) - SSR, ESR, File-based routing, components auto importing, modules, etc.

- ⚡️ Vite - Instant HMR.

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine.

- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss).

- 🔥 The `<script setup>` syntax.

- 🍍 [State Management via Pinia](https://github.com/vuejs/pinia), see [./composables/user.ts](./composables/user.ts).

- 📑 [Layout system](./layouts).

- 📥 APIs auto importing - for Composition API, VueUse and custom composables.

- 🏎 Zero-config cloud functions and deploy.

- 🦾 TypeScript, of course.

- 📲 [PWA](https://github.com/vite-pwa/nuxt) with offline support and auto-update behavior.

## Plugins

### Nuxt Modules

- [VueUse](https://github.com/vueuse/vueuse) - collection of useful composition APIs.
- [ColorMode](https://github.com/nuxt-modules/color-mode) - dark and Light mode with auto detection made easy with Nuxt.
- [UnoCSS](https://github.com/unocss/unocss) - the instant on-demand atomic CSS engine.
- [Pinia](https://github.com/vuejs/pinia) - intuitive, type safe, light and flexible Store for Vue.
- [VitePWA](https://github.com/vite-pwa/nuxt) - zero-config PWA Plugin for Nuxt 3.
- [DevTools](https://github.com/nuxt/devtools) - unleash Nuxt Developer Experience.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable [Vetur](https://vuejs.github.io/vetur/) if you have it).

## Variations

- [vitesse](https://github.com/antfu/vitesse) - Opinionated Vite Starter Template
- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Lightweight version of Vitesse
- [vitesse-nuxt-bridge](https://github.com/antfu/vitesse-nuxt-bridge) - Vitesse for Nuxt 2 with Bridge
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - WebExtension Vite starter template

## Try it now!

### Online

<a href="https://stackblitz.com/github/antfu/vitesse-nuxt3"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt=""></a>

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/antfu/vitesse-nuxt3/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit antfu/vitesse-nuxt3 my-nuxt3-app
cd my-nuxt3-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```
