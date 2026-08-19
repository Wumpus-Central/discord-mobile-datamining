// _runtime/08050_isIterateeCall.js
import isArrayLike from "00603_isArrayLike.js";
import isObject from "00606_isObject.js";
import isIndex from "00628_isIndex.js";
import eq from "00752_eq.js";


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