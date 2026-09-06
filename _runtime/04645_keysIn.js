// === Module 4645: keysIn ===

// Module 4645 (keysIn)
import _mod518 from "module_518" /* 518 */;
import arrayLikeKeys from "arrayLikeKeys" /* 532 */;
import baseKeysIn from "baseKeysIn" /* 4646 */;


export default function keysIn(arg0) {
  if (_mod518(arg0)) {
    let tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
};