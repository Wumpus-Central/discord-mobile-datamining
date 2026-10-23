// === Module 17178: baseIndexOf ===

// Module 17178 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5727 */;
import strictIndexOf from "strictIndexOf" /* 17179 */;
import baseIsNaN from "baseIsNaN" /* 17180 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};