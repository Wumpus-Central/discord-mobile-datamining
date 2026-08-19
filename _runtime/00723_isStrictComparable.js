// === Module 723: isStrictComparable ===

// Module 723 (isStrictComparable)
import isObject from "isObject" /* 606 */;


export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !isObject(arg0);
  }
  return tmp;
};