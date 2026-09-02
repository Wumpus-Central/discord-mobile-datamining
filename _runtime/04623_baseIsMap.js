// === Module 4623: baseIsMap ===

// Module 4623 (baseIsMap)
import isObjectLike from "isObjectLike" /* 617 */;
import _mod767 from "module_767" /* 767 */;


export default function baseIsMap(arg0) {
  let tmp3 = isObjectLike(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod767(arg0);
  }
  return tmp3;
};