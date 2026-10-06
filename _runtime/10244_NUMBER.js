// === Module 10244: NUMBER ===

// Module 10244 (NUMBER)
function alphaNum(str) {
  return String.fromCharCode(str.charCodeAt(0) - 65248);
}

export const toHankaku = function toHankaku(match) {
  const str = String(match);
  const str2 = str.replace(/\u2019/g, "'");
  const str3 = str2.replace(/\u201D/g, "\"");
  const str4 = str3.replace(/\u3000/g, " ");
  const str5 = str4.replace(/\uFFE5/g, "\u00A5");
  return str5.replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
};
export const jaStringToNumber = function jaStringToNumber(match) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < match.length) {
    do {
      let sum;
      let tmp = match[num];
      if ("\u5341" === tmp) {
        let result;
        if (0 === num2) {
          result = exports.NUMBER[tmp];
        } else {
          result = num2 * exports.NUMBER[tmp];
        }
        sum = result;
      } else {
        sum = num2 + exports.NUMBER[tmp];
      }
      num = num + 1;
      num2 = sum;
      num3 = sum;
    } while (num < match.length);
  }
  return num3;
};
export const NUMBER = { "\u96f6": 0, "\u3007": 0, "\u4e00": 1, "\u4e8c": 2, "\u4e09": 3, "\u56db": 4, "\u4e94": 5, "\u516d": 6, "\u4e03": 7, "\u516b": 8, "\u4e5d": 9, "\u5341": 10 };
export const WEEKDAY_OFFSET = { "\u65e5": 0, "\u6708": 1, "\u706b": 2, "\u6c34": 3, "\u6728": 4, "\u91d1": 5, "\u571f": 6 };