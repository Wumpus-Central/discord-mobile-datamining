// === Module 629: ? ===

// Module 629
import _mod630 from "module_630" /* 630 */;
import baseHasIn from "baseHasIn" /* 631 */;


export default function hasIn(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    tmp = _mod630(arg0, arg1, baseHasIn);
  }
  return tmp;
};