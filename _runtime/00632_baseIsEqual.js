// === Module 632: baseIsEqual ===

// Module 632 (baseIsEqual)
import _mod535 from "module_535" /* 535 */;
import baseIsEqualDeep from "baseIsEqualDeep" /* 633 */;

function baseIsEqual(arg0, arg1, arg2, arg3, arg4) {
  if (arg0 === arg1) {
    return tmp;
  } else {
    if (null != arg0) {
      if (null != arg1) {
        if (_mod535(arg0)) {
          let tmp11 = baseIsEqualDeep(arg0, arg1, arg2, arg3, baseIsEqual, arg4);
        }
      }
    }
    tmp11 = arg0 != arg0 && arg1 != arg1;
    const tmp12 = arg0 != arg0 && arg1 != arg1;
  }
}

export default baseIsEqual;