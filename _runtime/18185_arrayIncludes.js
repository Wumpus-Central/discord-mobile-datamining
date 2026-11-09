// === Module 18185: arrayIncludes ===

// Module 18185 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 18186 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = baseIndexOf(arg0, arg1, 0) > -1;
  }
  return tmp;
};