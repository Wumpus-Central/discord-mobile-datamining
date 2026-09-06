// === Module 10547: zhStringToNumber ===

// Module 10547 (zhStringToNumber)
const exports = arg5;
arg5.NUMBER = undefined;
arg5.WEEKDAY_OFFSET = undefined;
arg5.zhStringToNumber = function zhStringToNumber(arg0) {
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
arg5.zhStringToYear = function zhStringToYear(arg0) {
  let length;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      let tmp = exports;
      str = `${exports.NUMBER[arg0[num]]}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return parseInt(str2);
};
arg5.NUMBER = { "零": 0, "一": 1, "二": 2, "兩": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "十": 10, "廿": 20, "卅": 30 };
arg5.WEEKDAY_OFFSET = { "天": 0, "日": 0, "一": 1, "二": 2, "三": 3, "四": 4, "五": 5, "六": 6 };