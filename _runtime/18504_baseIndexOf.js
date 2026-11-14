// _runtime/18504_baseIndexOf.js
import baseFindIndex from "06086_baseFindIndex.js";
import strictIndexOf from "18505_strictIndexOf.js";
import baseIsNaN from "18506_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
