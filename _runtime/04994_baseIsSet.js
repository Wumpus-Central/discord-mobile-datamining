// === Module 4994: baseIsSet ===

// Module 4994 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;
import _mod645 from "module_645" /* 645 */;


export default function baseIsSet(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Set]" == _mod645(arg0);
  return tmp3;
};