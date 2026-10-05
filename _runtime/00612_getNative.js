// === Module 612: getNative ===

// Module 612 (getNative)
import getValue from "getValue" /* 613 */;
import baseIsNative from "baseIsNative" /* 614 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};