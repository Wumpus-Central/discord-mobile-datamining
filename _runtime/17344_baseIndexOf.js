// === Module 17344: baseIndexOf ===

// Module 17344 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5708 */;
import strictIndexOf from "strictIndexOf" /* 17345 */;
import baseIsNaN from "baseIsNaN" /* 17346 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};