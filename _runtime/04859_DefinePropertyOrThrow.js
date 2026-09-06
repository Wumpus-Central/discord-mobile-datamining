// _runtime/04859_DefinePropertyOrThrow.js
import isObject from "04809_isObject.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4856)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4860)(arg2)) {
        tmp13 = tmp(4861)(arg2);
      }
      if (tmp(4860)(tmp13)) {
        let tmpResult = tmp(4863);
        tmpResult = tmp(4864);
        return tmpResult(tmpResult, tmp(4865), tmp(4866), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(1283)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(1283)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(1283)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
