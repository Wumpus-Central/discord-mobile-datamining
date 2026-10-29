// _runtime/17725_baseIndexOf.js
import baseFindIndex from "05767_baseFindIndex.js";
import strictIndexOf from "17726_strictIndexOf.js";
import baseIsNaN from "17727_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
