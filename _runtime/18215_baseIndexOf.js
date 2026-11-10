// _runtime/18215_baseIndexOf.js
import baseFindIndex from "05910_baseFindIndex.js";
import strictIndexOf from "18216_strictIndexOf.js";
import baseIsNaN from "18217_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
