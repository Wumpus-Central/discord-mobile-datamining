// _runtime/17853_baseIndexOf.js
import baseFindIndex from "05779_baseFindIndex.js";
import strictIndexOf from "17854_strictIndexOf.js";
import baseIsNaN from "17855_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
