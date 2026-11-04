// === Module 18104: baseIndexOf ===

// Module 18104 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5913 */;
import strictIndexOf from "strictIndexOf" /* 18105 */;
import baseIsNaN from "baseIsNaN" /* 18106 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};