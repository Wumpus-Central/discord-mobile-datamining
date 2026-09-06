// === Module 586: isKey ===

// Module 586 (isKey)
import _mod514 from "module_514" /* 514 */;
import isSymbol from "isSymbol" /* 553 */;

const re2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const re3 = /^\w*$/;

export default function isKey(num) {
  if (_mod514(num)) {
    return false;
  } else {
    let tmp3 = typeof num !== "number";
    if (typeof num !== "number") {
      tmp3 = typeof num !== "symbol";
    }
    if (tmp3) {
      tmp3 = typeof num !== "boolean";
    }
    if (tmp3) {
      tmp3 = null != num;
    }
    if (tmp3) {
      tmp3 = !isSymbol(num);
    }
    let tmp5 = !tmp3;
    if (tmp3) {
      let isMatch = regex2.test(num);
      if (!isMatch) {
        isMatch = !regex.test(num);
      }
      if (!isMatch) {
        let tmp11 = null != arg1;
        if (tmp11) {
          const _Object = Object;
          tmp11 = num in Object(arg1);
        }
        isMatch = tmp11;
      }
      tmp5 = isMatch;
    }
    return tmp5;
  }
  const tmp = require;
};