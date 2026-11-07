// _runtime/18173_baseIndexOf.js
import baseFindIndex from "05908_baseFindIndex.js";
import strictIndexOf from "18174_strictIndexOf.js";
import baseIsNaN from "18175_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
