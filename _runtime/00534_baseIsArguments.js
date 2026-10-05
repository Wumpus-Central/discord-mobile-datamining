// === Module 534: baseIsArguments ===

// Module 534 (baseIsArguments)
import baseGetTag from "baseGetTag" /* 522 */;
import isObjectLike from "isObjectLike" /* 535 */;


export default function baseIsArguments(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Arguments]" == baseGetTag(arg0);
  return tmp3;
};