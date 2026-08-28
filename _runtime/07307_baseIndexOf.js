// === Module 7307: baseIndexOf ===

// Module 7307 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4531 */;
import strictIndexOf from "strictIndexOf" /* 7308 */;
import baseIsNaN from "baseIsNaN" /* 7309 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
    const tmp3 = baseFindIndex;
  }
  return tmp3Result;
};