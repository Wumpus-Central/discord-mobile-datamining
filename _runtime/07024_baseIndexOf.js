// _runtime/07024_baseIndexOf.js
import baseFindIndex from "04865_baseFindIndex.js";
import strictIndexOf from "07025_strictIndexOf.js";
import baseIsNaN from "07026_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
