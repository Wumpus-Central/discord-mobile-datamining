// === Module 4441: DefinePropertyOrThrow ===

// Module 4441 (DefinePropertyOrThrow)
import isObject from "isObject" /* 4391 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4438)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4442)(arg2)) {
        tmp13 = tmp(4443)(arg2);
      }
      if (tmp(4442)(tmp13)) {
        let tmpResult = tmp(4445);
        tmpResult = tmp(4446);
        return tmpResult(tmpResult, tmp(4447), tmp(4448), arg0, arg1, tmp14);
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