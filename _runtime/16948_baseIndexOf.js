// === Module 16948: baseIndexOf ===

// Module 16948 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5691 */;
import strictIndexOf from "strictIndexOf" /* 16949 */;
import baseIsNaN from "baseIsNaN" /* 16950 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};