// === Module 4859: DefinePropertyOrThrow ===

// Module 4859 (DefinePropertyOrThrow)
import _mod4809 from "module_4809" /* 4809 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4809(arg0)) {
    if (tmp(4856)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4860)(arg2)) {
        tmp13 = tmp(4861)(arg2);
      }
      if (tmp(4860)(tmp13)) {
        tmp(4863);
        const tmpResult = tmp(4864);
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
};