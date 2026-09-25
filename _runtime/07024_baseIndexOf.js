// === Module 7024: baseIndexOf ===

// Module 7024 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4865 */;
import strictIndexOf from "strictIndexOf" /* 7025 */;
import baseIsNaN from "baseIsNaN" /* 7026 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};