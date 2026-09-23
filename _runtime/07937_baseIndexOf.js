// === Module 7937: baseIndexOf ===

// Module 7937 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4863 */;
import strictIndexOf from "strictIndexOf" /* 7938 */;
import baseIsNaN from "baseIsNaN" /* 7939 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};