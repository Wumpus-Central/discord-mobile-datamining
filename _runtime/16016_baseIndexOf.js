// _runtime/16016_baseIndexOf.js
import baseFindIndex from "05126_baseFindIndex.js";
import strictIndexOf from "16017_strictIndexOf.js";
import baseIsNaN from "16018_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
