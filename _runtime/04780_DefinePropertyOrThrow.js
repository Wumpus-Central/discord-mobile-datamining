// === Module 4780: DefinePropertyOrThrow ===

// Module 4780 (DefinePropertyOrThrow)
import isObject from "isObject" /* 4730 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4777)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4781)(arg2)) {
        tmp13 = tmp(4782)(arg2);
      }
      if (tmp(4781)(tmp13)) {
        let tmpResult = tmp(4784);
        tmpResult = tmp(4785);
        return tmpResult(tmpResult, tmp(4786), tmp(4787), arg0, arg1, tmp14);
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