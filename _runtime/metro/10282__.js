// _runtime/metro/10282__.js

export const zhStringToNumber = function zhStringToNumber(arg0) {
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (0 < arg0.length) {
    do {
      let sum;
      let tmp = arg0[num];
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
    } while (num < arg0.length);
  }
  return num3;
};
export const zhStringToYear = function zhStringToYear(arg0) {
  let length;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    do {
      str = `${exports.NUMBER[arg0[num]]}`;
      num = num + 1;
      str2 = str;
      length = arg0.length;
    } while (num < length);
  }
  return parseInt(str2);
};
export const NUMBER = {
  "\u96f6": 0,
  "\u3007": 0,
  "\u4e00": 1,
  "\u4e8c": 2,
  "\u4e24": 2,
  "\u4e09": 3,
  "\u56db": 4,
  "\u4e94": 5,
  "\u516d": 6,
  "\u4e03": 7,
  "\u516b": 8,
  "\u4e5d": 9,
  "\u5341": 10,
};
export const WEEKDAY_OFFSET = {
  "\u5929": 0,
  "\u65e5": 0,
  "\u4e00": 1,
  "\u4e8c": 2,
  "\u4e09": 3,
  "\u56db": 4,
  "\u4e94": 5,
  "\u516d": 6,
};
