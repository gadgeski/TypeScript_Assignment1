// ======================================
// TypeScript課題1: 基本的な型注釈
// ======================================

// 【課題の説明】
// 以下の変数に適切な型注釈を付けてください。
// TypeScriptの基本的な型（string, number, boolean, 配列, オブジェクト）を理解しましょう。

// 【練習問題】
// 以下のコメントアウトされた変数を、適切な型注釈を付けて定義してください
// ユーザー名や年齢等は適宜変更して構いません

// 1. ユーザー名（文字列）
// let userName = "田中太郎";

// 2. ユーザーの年齢（数値）
// let userAge = 25;

// 3. アクティブ状態（真偽値）
// let isActive = true;

// 4. 趣味のリスト（文字列の配列）
// let hobbies = ["読書", "映画鑑賞", "プログラミング"];

// 5. ユーザー情報オブジェクト
// let userInfo = { name: "佐藤花子", age: 30 };

// ======================================
// 【解答例】
// ======================================

let userName: string = "James";
let userAge: number = 25;
let isActive: boolean = true;
let hobbies: string[] = ["読書", "映画鑑賞", "プログラミング"];
let userInfo: { name: string; age: number } = { name: "Sophia", age: 24 };

// 【使用例・確認用のコード】
console.log(`ユーザー名: ${userName} (型: ${typeof userName})`);
console.log(`年齢: ${userAge} (型: ${typeof userAge})`);
console.log(`アクティブ: ${isActive} (型: ${typeof isActive})`);
console.log(`趣味: ${hobbies.join(", ")} (配列の長さ: ${hobbies.length})`);
console.log(`ユーザー情報: ${userInfo.name}, ${userInfo.age}歳`);

// ======================================
// 【ポイント解説】
// ======================================

// 1. 基本的な型注釈の書き方
//    変数名: 型名 = 値;

// 2. 配列の型注釈
//    型名[] または Array<型名>

// 3. オブジェクトの型注釈
//    { プロパティ名: 型名; プロパティ名: 型名 }

// 4. TypeScriptは型推論もできますが、明示的な型注釈で意図を明確にできます

// ======================================
// 【追加練習】
// ======================================

// 以下も試してみてください：

// null許可型
let nullableString: string | null = null;
nullableString = "値が入りました";

// 数値配列
let scores: number[] = [85, 92, 78, 96];

// より複雑なオブジェクト型
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

console.log("=== 追加練習の結果 ===");
console.log(`nullable文字列: ${nullableString}`);
console.log(`スコア平均: ${scores.reduce((a, b) => a + b) / scores.length}`);
console.log(
  `学生情報: ${student.name}さん、平均点: ${
    student.grades.reduce((a, b) => a + b) / student.grades.length
  }`
);
