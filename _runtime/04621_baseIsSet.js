// === Module 4621: baseIsSet ===

// Module 4621 (baseIsSet)
import isObjectLike from "isObjectLike" /* 617 */;
import _mod767 from "module_767" /* 767 */;


export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod767(arg0);
  }
  return tmp3;
};