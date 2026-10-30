// === Module 628: ? ===

// Module 628
import _mod629 from "module_629" /* 629 */;
import baseHasIn from "baseHasIn" /* 630 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod629(arg0, arg1, baseHasIn);
  }
  return tmp;
};