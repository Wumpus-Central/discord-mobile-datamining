// === Module 4659: baseIsMap ===

// Module 4659 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;
import _mod634 from "module_634" /* 634 */;


export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod634(arg0);
  }
  return tmp3;
};