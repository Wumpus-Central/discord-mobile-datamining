// === Module 5827: baseIsSet ===

// Module 5827 (baseIsSet)
import _mod535 from "module_535" /* 535 */;
import _mod633 from "module_633" /* 633 */;


export default function baseIsSet(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Set]" == _mod633(arg0);
  }
  return tmp3;
};