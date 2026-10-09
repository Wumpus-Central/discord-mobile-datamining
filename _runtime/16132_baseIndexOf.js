// _runtime/16132_baseIndexOf.js
import baseFindIndex from "05127_baseFindIndex.js";
import strictIndexOf from "16133_strictIndexOf.js";
import baseIsNaN from "16134_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
