// === Module 7615: baseIndexOf ===

// Module 7615 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4596 */;
import strictIndexOf from "strictIndexOf" /* 7616 */;
import baseIsNaN from "baseIsNaN" /* 7617 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};