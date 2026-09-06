// _runtime/metro/00552__.js
import _mod553 from "00553__.js";

const re2 = /^[-+]0x[0-9a-f]+$/i;
const re3 = /^0b[01]+$/i;
const re4 = /^0o[0-7]+$/i;

export default function toNumber(num) {
  if (typeof num === "number") {
    return num;
  } else if (_mod553(num)) {
    return NaN;
  } else {
    let tmp = num;
    if (tmp10(521)(num)) {
      let valueOfResult = num;
      if (typeof num.valueOf === "function") {
        valueOfResult = num.valueOf();
      }
      let text = valueOfResult;
      if (tmp10(521)(valueOfResult)) {
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
      const arr = tmp10(554)(tmp);
      const isMatch = re3.test(arr);
      if (!isMatch) {
        if (!re4.test(arr)) {
          num = NaN;
          if (!re2.test(arr)) {
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
    }
  }
}
