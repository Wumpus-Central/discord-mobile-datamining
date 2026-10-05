// === Module 15722: baseIndexOf ===

// Module 15722 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4926 */;
import strictIndexOf from "strictIndexOf" /* 15723 */;
import baseIsNaN from "baseIsNaN" /* 15724 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  let tmp3Result;
  if (arg1 == arg1) {
    tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    const tmp3 = baseFindIndex;
    tmp3Result = tmp3(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};