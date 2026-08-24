// _runtime/05037_baseIndexOf.js
import baseFindIndex from "04560_baseFindIndex.js";
import strictIndexOf from "05038_strictIndexOf.js";
import baseIsNaN from "05039_baseIsNaN.js";


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};