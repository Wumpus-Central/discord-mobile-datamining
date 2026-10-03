// === Module 15718: baseIndexOf ===

// Module 15718 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4926 */;
import strictIndexOf from "strictIndexOf" /* 15719 */;
import baseIsNaN from "baseIsNaN" /* 15720 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};