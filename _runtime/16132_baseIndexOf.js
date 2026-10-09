// === Module 16132: baseIndexOf ===

// Module 16132 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5127 */;
import strictIndexOf from "strictIndexOf" /* 16133 */;
import baseIsNaN from "baseIsNaN" /* 16134 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};