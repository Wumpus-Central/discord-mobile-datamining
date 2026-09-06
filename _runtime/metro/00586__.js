// === Module 586: ? ===

// Module 586
import _mod514 from "module_514" /* 514 */;

const _mod553 = tmp(553);
const re2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const re3 = /^\w*$/;

export default function isKey(num, arg1) {
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
      tmp3 = !_mod553(num);
    }
    let tmp5 = !tmp3;
    if (tmp3) {
      let isMatch = re3.test(num);
      if (!isMatch) {
        isMatch = !re2.test(num);
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
};