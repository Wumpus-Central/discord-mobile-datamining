// === Module 640: ? ===

// Module 640
import _mod641 from "module_641" /* 641 */;
import baseHasIn from "baseHasIn" /* 642 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod641(arg0, arg1, baseHasIn);
  }
  return tmp;
};