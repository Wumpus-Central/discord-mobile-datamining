// _runtime/04765_DefinePropertyOrThrow.js
import isObject from "04715_isObject.js";


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4762)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4766)(arg2)) {
        tmp13 = tmp(4767)(arg2);
      }
      if (tmp(4766)(tmp13)) {
        let tmpResult = tmp(4769);
        tmpResult = tmp(4770);
        return tmpResult(tmpResult, tmp(4771), tmp(4772), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(541)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};