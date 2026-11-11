// _runtime/18386_baseIndexOf.js
import baseFindIndex from "06023_baseFindIndex.js";
import strictIndexOf from "18387_strictIndexOf.js";
import baseIsNaN from "18388_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
