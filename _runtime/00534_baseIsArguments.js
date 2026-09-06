// === Module 534: baseIsArguments ===

// Module 534 (baseIsArguments)
import toStringTag from "toStringTag" /* 522 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function baseIsArguments(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == toStringTag(arg0);
  }
  return tmp3;
};