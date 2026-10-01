// === Module 15655: baseIndexOf ===

// Module 15655 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4881 */;
import strictIndexOf from "strictIndexOf" /* 15656 */;
import baseIsNaN from "baseIsNaN" /* 15657 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};