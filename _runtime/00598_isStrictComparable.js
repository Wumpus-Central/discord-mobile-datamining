// === Module 598: isStrictComparable ===

// Module 598 (isStrictComparable)
import isObject from "isObject" /* 521 */;


export default function isStrictComparable(arg0) {
  const tmp = arg0 == arg0 && !isObject(arg0);
  return tmp;
};