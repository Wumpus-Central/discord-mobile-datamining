// === Module 7306: arrayIncludes ===

// Module 7306 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7307 */;


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