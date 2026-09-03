// === Module 4813: DefinePropertyOrThrow ===

// Module 4813 (DefinePropertyOrThrow)
import isObject from "isObject" /* 4763 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (isObject(arg0)) {
    if (tmp(4810)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4814)(arg2)) {
        tmp13 = tmp(4815)(arg2);
      }
      if (tmp(4814)(tmp13)) {
        let tmpResult = tmp(4817);
        tmpResult = tmp(4818);
        return tmpResult(tmpResult, tmp(4819), tmp(4820), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(538)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new tmp(538)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(538)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};