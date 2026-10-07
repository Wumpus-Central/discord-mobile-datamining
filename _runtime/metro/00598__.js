// === Module 598: ? ===

// Module 598
import _mod521 from "module_521" /* 521 */;


export default function isStrictComparable(arg0) {
  let tmp = arg0 == arg0;
  if (tmp) {
    tmp = !_mod521(arg0);
  }
  return tmp;
};