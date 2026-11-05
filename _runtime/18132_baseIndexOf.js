// === Module 18132: baseIndexOf ===

// Module 18132 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5916 */;
import strictIndexOf from "strictIndexOf" /* 18133 */;
import baseIsNaN from "baseIsNaN" /* 18134 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};