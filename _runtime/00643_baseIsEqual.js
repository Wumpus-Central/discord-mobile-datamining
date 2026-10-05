// _runtime/00643_baseIsEqual.js
import baseIsEqualDeep from "00644_baseIsEqualDeep.js";

function baseIsEqual(arg0, arg1, arg2, arg3, arg4) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    if (null != arg0) {
      let tmp11;
      if (null != arg1) {
        tmp11 = baseIsEqualDeep(arg0, arg1, arg2, arg3, baseIsEqual, arg4);
      }
      tmp = tmp11;
    }
    tmp11 = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
}

export default baseIsEqual;
