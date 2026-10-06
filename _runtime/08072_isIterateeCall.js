// _runtime/08072_isIterateeCall.js
import isArrayLike from "00518_isArrayLike.js";
import isObject from "00521_isObject.js";
import isIndex from "00543_isIndex.js";
import eq from "00627_eq.js";

export default function isIterateeCall(arg0, num, arg2) {
  if (isObject(arg2)) {
    let tmp5;
    if (typeof num === "number") {
      tmp5 = isArrayLike(arg2) && isIndex(num, arg2.length);
      isArrayLike(arg2) && isIndex(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    const tmp6 = tmp5 && eq(arg2[num], arg0);
    return tmp6;
  } else {
    return false;
  }
}
