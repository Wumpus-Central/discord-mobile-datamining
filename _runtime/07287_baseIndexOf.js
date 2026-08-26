// === Module 7287: baseIndexOf ===

// Module 7287 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4529 */;
import strictIndexOf from "strictIndexOf" /* 7288 */;
import baseIsNaN from "baseIsNaN" /* 7289 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};