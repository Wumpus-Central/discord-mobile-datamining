// === Module 5032: baseIndexOf ===

// Module 5032 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4555 */;
import strictIndexOf from "strictIndexOf" /* 5033 */;
import baseIsNaN from "baseIsNaN" /* 5034 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};