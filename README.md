# 日本語 Currency Converter App

## 概要
このアプリは、通貨をリアルタイムで変換するシンプルな為替レート計算ツールです。  
ユーザーが金額と通貨を選択すると、最新の為替レートを取得して変換結果を表示します。

---

## 使用技術
- React (useState, useEffect)
- Fetch API
- AbortController（不要なリクエストのキャンセル）
- Frankfurter API（為替レート取得）

---

## 主な機能
- 通貨変換（USD / EUR / CAD / INR / JPY）
- 入力に応じたリアルタイム更新
- ローディング状態の表示
- エラーハンドリング
- 同一通貨の場合の最適化処理
- 不要なリクエストのキャンセル（AbortController）

---

## 学習背景（重要）
このアプリは、Udemy講座  
**The Ultimate React Course 2025: React, Next.js, Redux & More**  
のチャレンジ課題として作成しました。

- UI設計やアプリ設計は講座の内容に基づいています
- 実装は自分で考えて構築しています
- 以下の点については独自に改善・追加しました

### 自主的に行った改善
- AbortControllerを使ったfetchのキャンセル処理
- エラーハンドリングの実装
- ローディング状態の管理
- 同一通貨時の処理最適化
- 入力値に応じたリアクティブな再計算

---

## 学んだこと
- useEffectによる副作用管理
- 非同期処理（async/await + fetch）
- クリーンアップ関数の重要性
- 状態管理とUIの同期
- APIレスポンスの扱い方とエラーハンドリング

---

## 今後の改善点
- カスタムフックへの分離（useCurrency）
- 入力デバウンスによるパフォーマンス改善
- UI/UXの改善
- TypeScript対応
- テスト追加

　
　
　　
　
　

 # English Currency Converter App

## Overview
This is a simple currency converter application that fetches real-time exchange rates and converts amounts based on user input.

---

## Tech Stack
- React (useState, useEffect)
- Fetch API
- AbortController (to cancel unnecessary requests)
- Frankfurter API (exchange rates)

---

## Features
- Currency conversion (USD / EUR / CAD / INR / JPY)
- Real-time updates based on user input
- Loading state handling
- Error handling
- Optimization for same currency conversion
- Request cancellation using AbortController

---

## Learning Context (Important)
This project was built as a **challenge exercise** from the Udemy course:

**The Ultimate React Course 2025: React, Next.js, Redux & More**

- The overall idea and structure are based on the course
- The implementation was done independently
- Additional improvements were added

### Improvements I Implemented
- Request cancellation using AbortController
- Error handling
- Loading state management
- Optimization when converting the same currency
- Reactive updates based on input changes

---

## What I Learned
- Managing side effects with useEffect
- Handling asynchronous operations (async/await + fetch)
- Importance of cleanup functions
- Synchronizing state and UI
- Handling API responses and errors

---

## Future Improvements
- Extracting logic into a custom hook (useCurrency)
- Debouncing input for better performance
- Improving UI/UX
- Adding TypeScript
- Writing tests
