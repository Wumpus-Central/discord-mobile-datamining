// === Module 518: ? ===

// Module 518
import _mod519 from "module_519" /* 519 */;
import _mod520 from "module_520" /* 520 */;


export default function isArrayLike(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod519(arg0.length);
  }
  if (tmp) {
    tmp = !_mod520(arg0);
  }
  return tmp;
};