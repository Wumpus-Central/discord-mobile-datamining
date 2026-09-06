// === Module 8386: ? ===

// Module 8386
import _mod518 from "module_518" /* 518 */;
import _mod521 from "module_521" /* 521 */;
import _mod543 from "module_543" /* 543 */;
import eq from "eq" /* 616 */;


export default function isIterateeCall(arg0, num, arg2) {
  if (_mod521(arg2)) {
    if (typeof num === "number") {
      let tmp5 = _mod518(arg2) && _mod543(num, arg2.length);
      const tmp4 = _mod518(arg2) && _mod543(num, arg2.length);
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