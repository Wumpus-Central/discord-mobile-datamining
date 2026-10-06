// === Module 15758: baseIndexOf ===

// Module 15758 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4932 */;
import strictIndexOf from "strictIndexOf" /* 15759 */;
import baseIsNaN from "baseIsNaN" /* 15760 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  let tmp3Result;
  if (arg1 == arg1) {
    tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    const tmp3 = baseFindIndex;
    tmp3Result = tmp3(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};