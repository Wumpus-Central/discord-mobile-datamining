// === Module 4976: keysIn ===

// Module 4976 (keysIn)
import isArrayLike from "isArrayLike" /* 518 */;
import arrayLikeKeys from "arrayLikeKeys" /* 532 */;
import baseKeysIn from "baseKeysIn" /* 4977 */;


export default function keysIn(arg0) {
  let tmp3;
  if (isArrayLike(arg0)) {
    tmp3 = arrayLikeKeys(arg0, true);
  } else {
    tmp3 = baseKeysIn(arg0);
  }
  return tmp3;
};