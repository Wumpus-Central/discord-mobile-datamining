// _runtime/06995_baseIndexOf.js
import { baseFindIndex } from "04367_baseFindIndex.js";
import { strictIndexOf } from "06996_strictIndexOf.js";
import { baseIsNaN } from "06997_baseIsNaN.js";

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};