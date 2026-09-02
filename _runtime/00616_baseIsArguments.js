// === Module 616: baseIsArguments ===

// Module 616 (baseIsArguments)
import toStringTag from "toStringTag" /* 604 */;
import isObjectLike from "isObjectLike" /* 617 */;


export default function baseIsArguments(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == toStringTag(arg0);
  }
  return tmp3;
};