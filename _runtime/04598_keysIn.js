// === Module 4598: keysIn ===

// Module 4598 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;
import arrayLikeKeys from "arrayLikeKeys" /* 617 */;
import baseKeysIn from "baseKeysIn" /* 4599 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
};