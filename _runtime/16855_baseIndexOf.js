// === Module 16855: baseIndexOf ===

// Module 16855 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5190 */;
import strictIndexOf from "strictIndexOf" /* 16856 */;
import baseIsNaN from "baseIsNaN" /* 16857 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};