// === Module 637: toNumber ===

// Module 637 (toNumber)
import isSymbol from "isSymbol" /* 638 */;

const re2 = /^[-+]0x[0-9a-f]+$/i;
const re3 = /^0b[01]+$/i;
const re4 = /^0o[0-7]+$/i;

export default function toNumber(num) {
  if (typeof num === "number") {
    return num;
  } else if (isSymbol(num)) {
    return NaN;
  } else {
    let tmp = num;
    if (tmp10(606)(num)) {
      let valueOfResult = num;
      if (typeof num.valueOf === "function") {
        valueOfResult = num.valueOf();
      }
      let text = valueOfResult;
      if (tmp10(606)(valueOfResult)) {
        text = `${tmp2}`;
      }
      tmp = text;
    }
    if (typeof tmp !== "string") {
      let tmp9 = tmp;
      if (0 !== tmp) {
        tmp9 = +tmp;
      }
      return tmp9;
    } else {
      const arr = tmp10(639)(tmp);
      const isMatch = regex2.test(arr);
      if (!isMatch) {
        if (!regex3.test(arr)) {
          num = NaN;
          if (!regex.test(arr)) {
            num = +arr;
          }
        }
        return num;
      }
      let num3 = 8;
      const substr = arr.slice(2);
      if (isMatch) {
        num3 = 2;
      }
      num = parseInt(substr, num3);
      const tmp7 = parseInt;
    }
  }
};