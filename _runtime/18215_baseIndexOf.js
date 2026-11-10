// === Module 18215: baseIndexOf ===

// Module 18215 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5910 */;
import strictIndexOf from "strictIndexOf" /* 18216 */;
import baseIsNaN from "baseIsNaN" /* 18217 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};