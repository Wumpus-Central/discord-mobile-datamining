// === Module 601: ? ===

// Module 601
import _mod602 from "module_602" /* 602 */;
import baseIsNative from "baseIsNative" /* 603 */;


export default function getNative(arg0, arg1) {
  const tmp = _mod602(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};