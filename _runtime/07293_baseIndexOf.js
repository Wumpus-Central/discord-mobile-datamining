// === Module 7293: baseIndexOf ===

// Module 7293 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4530 */;
import strictIndexOf from "strictIndexOf" /* 7294 */;
import baseIsNaN from "baseIsNaN" /* 7295 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};