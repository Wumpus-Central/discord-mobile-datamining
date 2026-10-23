// === Module 17134: baseIndexOf ===

// Module 17134 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5715 */;
import strictIndexOf from "strictIndexOf" /* 17135 */;
import baseIsNaN from "baseIsNaN" /* 17136 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};