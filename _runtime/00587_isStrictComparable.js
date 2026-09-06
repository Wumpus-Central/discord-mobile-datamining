// === Module 587: isStrictComparable ===

// Module 587 (isStrictComparable)
import isObject from "isObject" /* 521 */;


export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject(arg0);
  }
  return tmp;
};