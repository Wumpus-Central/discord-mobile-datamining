// === Module 18381: baseIndexOf ===

// Module 18381 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 6023 */;
import strictIndexOf from "strictIndexOf" /* 18382 */;
import baseIsNaN from "baseIsNaN" /* 18383 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};