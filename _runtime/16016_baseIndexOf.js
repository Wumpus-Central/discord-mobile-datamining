// === Module 16016: baseIndexOf ===

// Module 16016 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5126 */;
import strictIndexOf from "strictIndexOf" /* 16017 */;
import baseIsNaN from "baseIsNaN" /* 16018 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};