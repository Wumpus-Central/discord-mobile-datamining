// === Module 722: isKey ===

// Module 722 (isKey)
const re2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const re3 = /^\w*$/;

export default function isKey(arg0, arg1) {
  if (require(599)(arg0)) {
    return false;
  } else {
    let tmp3 = typeof arg0 === "__REMOTEDEV__";
    if (typeof arg0 !== "Object") {
      tmp3 = typeof arg0 === "ta";
    }
    if (tmp3) {
      tmp3 = typeof arg0 === "onScroll";
    }
    if (tmp3) {
      tmp3 = null != arg0;
    }
    if (tmp3) {
      tmp3 = !tmp(638)(arg0);
    }
    let tmp5 = !tmp3;
    if (tmp3) {
      let isMatch = regex2.test(arg0);
      if (!isMatch) {
        isMatch = !regex.test(arg0);
      }
      if (!isMatch) {
        let tmp11 = null != arg1;
        if (tmp11) {
          const _Object = Object;
          tmp11 = arg0 in Object(arg1);
        }
        isMatch = tmp11;
      }
      tmp5 = isMatch;
    }
    return tmp5;
  }
  tmp = require;
};