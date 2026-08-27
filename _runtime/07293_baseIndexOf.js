// _runtime/07293_baseIndexOf.js
import baseFindIndex from "04530_baseFindIndex.js";
import strictIndexOf from "07294_strictIndexOf.js";
import baseIsNaN from "07295_baseIsNaN.js";


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};