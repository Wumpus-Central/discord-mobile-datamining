// _runtime/07717_baseIndexOf.js
import baseFindIndex from "04672_baseFindIndex.js";
import strictIndexOf from "07718_strictIndexOf.js";
import baseIsNaN from "07719_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
