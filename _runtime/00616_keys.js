// === Module 616: keys ===

// Module 616 (keys)
import isArrayLike from "isArrayLike" /* 603 */;
import arrayLikeKeys from "arrayLikeKeys" /* 617 */;
import baseKeys from "baseKeys" /* 629 */;


export default function keys(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = arrayLikeKeys(arg0);
  } else {
    tmp3 = baseKeys(arg0);
  }
  return tmp3;
};