// _runtime/07666_baseIndexOf.js
import baseFindIndex from "04641_baseFindIndex.js";
import strictIndexOf from "07667_strictIndexOf.js";
import baseIsNaN from "07668_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
