// _runtime/10516_alphaNum.js
const exports = arg5;
function alphaNum(str) {
  return String.fromCharCode(str.charCodeAt(0) - 65248);
}
arg5.NUMBER = undefined;
arg5.WEEKDAY_OFFSET = undefined;
arg5.toHankaku = function toHankaku(arg0) {
  const str = String(arg0);
  const str2 = String(arg0).replace(/\u2019/g, "'");
  const str3 = String(arg0)
    .replace(/\u2019/g, "'")
    .replace(/\u201D/g, '"');
  const str4 = String(arg0)
    .replace(/\u2019/g, "'")
    .replace(/\u201D/g, '"')
    .replace(/\u3000/g, " ");
  return String(arg0)
    .replace(/\u2019/g, "'")
    .replace(/\u201D/g, '"')
    .replace(/\u3000/g, " ")
    .replace(/\uFFE5/g, "\u00A5")
    .replace(
      /[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g,
      alphaNum,
    );
};
arg5.jaStringToNumber = function jaStringToNumber(arg0) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arg0.length) {
    while ("\u5341" !== arg0[num]) {
      let tmp4 = exports;
      let sum = num2 + exports.NUMBER[tmp];
      num = num + 1;
      num2 = sum;
      num3 = sum;
    }
    if (0 === num2) {
      let result = exports.NUMBER[tmp];
    } else {
      result = num2 * exports.NUMBER[tmp];
    }
  }
  return num3;
};
arg5.NUMBER = { 零: 0, 〇: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10 };
arg5.WEEKDAY_OFFSET = { 日: 0, 月: 1, 火: 2, 水: 3, 木: 4, 金: 5, 土: 6 };
