// === Module 531: ? ===

// Module 531
import _mod518 from "module_518" /* 518 */;
import arrayLikeKeys from "arrayLikeKeys" /* 532 */;
import baseKeys from "baseKeys" /* 544 */;


export default function keys(arg0) {
  if (_mod518(arg0)) {
    let tmp3 = arrayLikeKeys(arg0);
  } else {
    tmp3 = baseKeys(arg0);
  }
  return tmp3;
};