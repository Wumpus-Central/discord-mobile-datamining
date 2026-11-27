// === Module 17519: baseIndexOf ===

// Module 17519 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5834 */;
import strictIndexOf from "strictIndexOf" /* 17520 */;
import baseIsNaN from "baseIsNaN" /* 17521 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};