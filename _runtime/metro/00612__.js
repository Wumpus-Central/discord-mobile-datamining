// === Module 612: ? ===

// Module 612
import _mod613 from "module_613" /* 613 */;
import baseIsNative from "baseIsNative" /* 614 */;


export default function getNative(arg0, arg1) {
  const tmp = _mod613(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};