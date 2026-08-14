// _runtime/04661_DefinePropertyOrThrow.js
import { isObject } from "04611_isObject.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4658)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4662)(arg2)) {
        tmp13 = tmp(4663)(arg2);
      }
      if (tmp(4662)(tmp13)) {
        let tmpResult = tmp(4665);
        tmpResult = tmp(4666);
        return tmpResult(tmpResult, tmp(4667), tmp(4668), arg0, arg1, tmp14);
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