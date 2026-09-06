// _runtime/metro/00586__.js
import _mod514 from "00514__.js";
import _mod553 from "00553__.js";

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
}
