// === Module 17725: baseIndexOf ===

// Module 17725 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5767 */;
import strictIndexOf from "strictIndexOf" /* 17726 */;
import baseIsNaN from "baseIsNaN" /* 17727 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};