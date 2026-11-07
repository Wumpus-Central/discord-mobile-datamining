// === Module 18173: baseIndexOf ===

// Module 18173 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 5908 */;
import strictIndexOf from "strictIndexOf" /* 18174 */;
import baseIsNaN from "baseIsNaN" /* 18175 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};