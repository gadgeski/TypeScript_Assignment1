# TypeScript課題1: 基本的な型注釈

TypeScriptの基本的な型注釈を学習するための練習プロジェクトです。

## 概要

このプロジェクトでは、TypeScriptの基本的な型（string, number, boolean, 配列, オブジェクト）について学習し、適切な型注釈の付け方を練習します。

## 学習内容

- **基本的な型注釈**: `string`, `number`, `boolean`
- **配列の型注釈**: `string[]`, `number[]`
- **オブジェクトの型注釈**: `{ プロパティ名: 型名 }`
- **ユニオン型**: `string | null`

## プロジェクト構成

```
typescript_assignment1/
├── src/
│   └── index.ts          # メインのTypeScriptファイル
├── package.json          # プロジェクト設定
├── package-lock.json     # 依存関係のロック
└── tsconfig.json         # TypeScriptコンパイラ設定
```

## 環境要件

- Node.js 14.17以上
- TypeScript 5.8.3

## セットアップ

1. 依存関係をインストール:
```bash
npm install
```

2. TypeScriptファイルをコンパイル:
```bash
npx tsc
```

3. コンパイルされたJavaScriptファイルを実行:
```bash
node src/index.js
```

## コード内容

### 基本的な型注釈の例

```typescript
// 文字列型
let userName: string = "James";

// 数値型
let userAge: number = 25;

// 真偽値型
let isActive: boolean = true;

// 文字列配列型
let hobbies: string[] = ["読書", "映画鑑賞", "プログラミング"];

// オブジェクト型
let userInfo: { name: string; age: number } = { name: "Sophia", age: 24 };
```

### 発展的な型注釈

```typescript
// null許可型
let nullableString: string | null = null;

// 数値配列
let scores: number[] = [85, 92, 78, 96];

// 複雑なオブジェクト型
let student: {
  name: string;
  age: number;
  grades: number[];
  isActive: boolean;
} = {
  name: "John",
  age: 20,
  grades: [85, 90, 78],
  isActive: true,
};
```

## 実行結果

プログラムを実行すると、以下のような出力が表示されます：

```
ユーザー名: James (型: string)
年齢: 25 (型: number)
アクティブ: true (型: boolean)
趣味: 読書, 映画鑑賞, プログラミング (配列の長さ: 3)
ユーザー情報: Sophia, 24歳
=== 追加練習の結果 ===
nullable文字列: 値が入りました
スコア平均: 87.75
学生情報: Johnさん、平均点: 84.33333333333333
```

## 学習ポイント

1. **基本的な型注釈の書き方**: `変数名: 型名 = 値;`
2. **配列の型注釈**: `型名[]` または `Array<型名>`
3. **オブジェクトの型注釈**: `{ プロパティ名: 型名; プロパティ名: 型名 }`
4. **TypeScriptの型推論**: 明示的な型注釈で意図を明確にできる

## TypeScript設定

- **target**: ES2016
- **module**: CommonJS
- **strict**: 有効（厳密な型チェック）
- **esModuleInterop**: 有効

## 練習のポイント

このコードを参考に、以下の点を意識して練習してください：

- 変数の用途に応じた適切な型の選択
- 配列やオブジェクトの型定義
- null許可型の使い方
- 型安全性を保つためのTypeScriptの活用

TypeScriptの型システムを理解することで、より安全で保守性の高いコードを書けるようになります。