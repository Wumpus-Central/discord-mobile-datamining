// === Module 7666: baseIndexOf ===

// Module 7666 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4641 */;
import strictIndexOf from "strictIndexOf" /* 7667 */;
import baseIsNaN from "baseIsNaN" /* 7668 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};