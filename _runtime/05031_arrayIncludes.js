// === Module 5031: arrayIncludes ===

// Module 5031 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 5032 */;


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