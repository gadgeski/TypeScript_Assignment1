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
var userName = "James";
var userAge = 25;
var isActive = true;
var hobbies = ["読書", "映画鑑賞", "プログラミング"];
var userInfo = { name: "Sophia", age: 24 };
// 【使用例・確認用のコード】
console.log("\u30E6\u30FC\u30B6\u30FC\u540D: ".concat(userName, " (\u578B: ").concat(typeof userName, ")"));
console.log("\u5E74\u9F62: ".concat(userAge, " (\u578B: ").concat(typeof userAge, ")"));
console.log("\u30A2\u30AF\u30C6\u30A3\u30D6: ".concat(isActive, " (\u578B: ").concat(typeof isActive, ")"));
console.log("\u8DA3\u5473: ".concat(hobbies.join(", "), " (\u914D\u5217\u306E\u9577\u3055: ").concat(hobbies.length, ")"));
console.log("\u30E6\u30FC\u30B6\u30FC\u60C5\u5831: ".concat(userInfo.name, ", ").concat(userInfo.age, "\u6B73"));
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
var nullableString = null;
nullableString = "値が入りました";
// 数値配列
var scores = [85, 92, 78, 96];
// より複雑なオブジェクト型
var student = {
    name: "John",
    age: 20,
    grades: [85, 90, 78],
    isActive: true,
};
console.log("=== 追加練習の結果 ===");
console.log("nullable\u6587\u5B57\u5217: ".concat(nullableString));
console.log("\u30B9\u30B3\u30A2\u5E73\u5747: ".concat(scores.reduce(function (a, b) { return a + b; }) / scores.length));
console.log("\u5B66\u751F\u60C5\u5831: ".concat(student.name, "\u3055\u3093\u3001\u5E73\u5747\u70B9: ").concat(student.grades.reduce(function (a, b) { return a + b; }) / student.grades.length));
