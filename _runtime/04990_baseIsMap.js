// === Module 4990: baseIsMap ===

// Module 4990 (baseIsMap)
import isObjectLike from "isObjectLike" /* 535 */;
import _mod645 from "module_645" /* 645 */;


export default function baseIsMap(arg0) {
  const tmp3 = isObjectLike(arg0) && "[object Map]" == _mod645(arg0);
  return tmp3;
};