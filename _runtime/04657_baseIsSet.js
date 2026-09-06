// === Module 4657: baseIsSet ===

// Module 4657 (baseIsSet)
import isObjectLike from "isObjectLike" /* 535 */;
import _mod634 from "module_634" /* 634 */;


export default function baseIsSet(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod634(arg0);
  }
  return tmp3;
};