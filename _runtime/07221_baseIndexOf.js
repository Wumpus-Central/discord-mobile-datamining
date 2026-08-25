// _runtime/07221_baseIndexOf.js
import baseFindIndex from "04465_baseFindIndex.js";
import strictIndexOf from "07222_strictIndexOf.js";
import baseIsNaN from "07223_baseIsNaN.js";


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};