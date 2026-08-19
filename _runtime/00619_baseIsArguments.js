// === Module 619: baseIsArguments ===

// Module 619 (baseIsArguments)
import toStringTag from "toStringTag" /* 607 */;
import isObjectLike from "isObjectLike" /* 620 */;


export default function baseIsArguments(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == toStringTag(arg0);
  }
  return tmp3;
};