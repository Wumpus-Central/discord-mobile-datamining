// === Module 8386: ? ===

// Module 8386
import _mod521 from "module_521" /* 521 */;


export default function isIterateeCall(arg0, num, arg2) {
  if (_mod521(arg2)) {
    if (typeof num === "number") {
      let tmp5 = tmp(518)(arg2) && tmp(543)(num, arg2.length);
      const tmp4 = tmp(518)(arg2) && tmp(543)(num, arg2.length);
    } else {
      tmp5 = typeof num === "string";
      if (typeof num === "string") {
        tmp5 = num in arg2;
      }
    }
    let tmp6 = tmp5;
    if (tmp6) {
      tmp6 = tmp(616)(arg2[num], arg0);
    }
    return tmp6;
  } else {
    return false;
  }
};