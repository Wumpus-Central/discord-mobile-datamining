// _runtime/00768_baseIsEqual.js
import isObjectLike from "00620_isObjectLike.js";
import baseIsEqualDeep from "00769_baseIsEqualDeep.js";

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