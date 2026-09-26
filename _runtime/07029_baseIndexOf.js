// _runtime/07029_baseIndexOf.js
import baseFindIndex from "04872_baseFindIndex.js";
import strictIndexOf from "07030_strictIndexOf.js";
import baseIsNaN from "07031_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
