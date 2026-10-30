// === Module 600: ? ===

// Module 600
import _mod601 from "module_601" /* 601 */;
import baseIsNative from "baseIsNative" /* 602 */;


export default function getNative(arg0, arg1) {
  const tmp = _mod601(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};