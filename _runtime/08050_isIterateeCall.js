// === Module 8050: isIterateeCall ===

// Module 8050 (isIterateeCall)
import isArrayLike from "isArrayLike" /* 603 */;
import isObject from "isObject" /* 606 */;
import isIndex from "isIndex" /* 628 */;
import eq from "eq" /* 752 */;


export default function isIterateeCall(arg0, num) {
  if (isObject(arg2)) {
    if (typeof num === "number") {
      let tmp5 = isArrayLike(arg2) && isIndex(num, arg2.length);
      const tmp4 = isArrayLike(arg2) && isIndex(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = eq(arg2[num], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
};