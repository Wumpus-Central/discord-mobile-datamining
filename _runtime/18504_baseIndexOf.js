// === Module 18504: baseIndexOf ===

// Module 18504 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6086 */;
import strictIndexOf from "strictIndexOf" /* 18505 */;
import baseIsNaN from "baseIsNaN" /* 18506 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};