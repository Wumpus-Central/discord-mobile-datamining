// === Module 4994: baseIsSet ===

// Module 4994 (baseIsSet)
import _mod535 from "module_535" /* 535 */;
import _mod645 from "module_645" /* 645 */;


export default function baseIsSet(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod645(arg0);
  }
  return tmp3;
};