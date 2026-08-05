// _runtime/06983_baseIndexOf.js
import { baseFindIndex } from "04367_baseFindIndex.js";
import { strictIndexOf } from "06984_strictIndexOf.js";
import { baseIsNaN } from "06985_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf /* strictIndexOf */(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex /* baseFindIndex */(arg0, baseIsNaN /* baseIsNaN */, arg2);
    const tmp3 = baseFindIndex /* baseFindIndex */;
  }
  return tmp3Result;
};