// === Module 5333: DefinePropertyOrThrow ===

// Module 5333 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5283 from "module_5283" /* 5283 */;
import _mod5330 from "module_5330" /* 5330 */;
import _mod5334 from "module_5334" /* 5334 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5335 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5337 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5338 */;
import SameValue from "SameValue" /* 5339 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5340 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5283(arg0)) {
    if (_mod5330(arg1)) {
      let tmp13 = arg2;
      if (!_mod5334(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5334(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1282("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};