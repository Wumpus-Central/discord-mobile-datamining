// _runtime/15758_baseIndexOf.js
import baseFindIndex from "04932_baseFindIndex.js";
import strictIndexOf from "15759_strictIndexOf.js";
import baseIsNaN from "15760_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  let tmp3Result;
  if (arg1 == arg1) {
    tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    const tmp3 = baseFindIndex;
    tmp3Result = tmp3(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
}
