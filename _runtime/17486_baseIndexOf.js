// === Module 17486: baseIndexOf ===

// Module 17486 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5765 */;
import strictIndexOf from "strictIndexOf" /* 17487 */;
import baseIsNaN from "baseIsNaN" /* 17488 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};