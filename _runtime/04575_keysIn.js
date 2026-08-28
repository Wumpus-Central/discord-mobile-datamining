// === Module 4575: keysIn ===

// Module 4575 (keysIn)
import isArrayLike from "isArrayLike" /* 603 */;


export default function keysIn(arg0) {
  if (isArrayLike(arg0)) {
    let tmp3 = tmp(617)(arg0, true);
  } else {
    tmp3 = tmp(4576)(arg0);
  }
  return tmp3;
};