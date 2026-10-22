// _runtime/17112_baseIndexOf.js
import baseFindIndex from "05715_baseFindIndex.js";
import strictIndexOf from "17113_strictIndexOf.js";
import baseIsNaN from "17114_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
