// === Module 768: baseIsEqual ===

// Module 768 (baseIsEqual)
import isObjectLike from "isObjectLike" /* 620 */;
import baseIsEqualDeep from "baseIsEqualDeep" /* 769 */;

function baseIsEqual(arg0, arg1, arg2, arg3, arg4) {
  if (arg0 === arg1) {
    return tmp;
  } else if (null != arg0) {
    if (null != arg1) {
      if (isObjectLike(arg0)) {
        const tmp11 = baseIsEqualDeep(arg0, arg1, arg2, arg3, baseIsEqual, arg4);
      }
    }
  }
}

export default baseIsEqual;