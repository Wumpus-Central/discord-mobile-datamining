// === Module 720: isStrictComparable ===

// Module 720 (isStrictComparable)
import isObject from "isObject" /* 603 */;


export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject(arg0);
  }
  return tmp;
};