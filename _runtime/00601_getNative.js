// === Module 601: getNative ===

// Module 601 (getNative)
import getValue from "getValue" /* 602 */;
import baseIsNative from "baseIsNative" /* 603 */;


export default function getNative(arg0, arg1) {
  const tmp = getValue(arg0, arg1);
  let tmp2;
  if (baseIsNative(tmp)) {
    tmp2 = tmp;
  }
  return tmp2;
};