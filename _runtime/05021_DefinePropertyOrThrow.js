// === Module 5021: DefinePropertyOrThrow ===

// Module 5021 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4971 from "module_4971" /* 4971 */;
import _mod5018 from "module_5018" /* 5018 */;
import _mod5022 from "module_5022" /* 5022 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5023 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5025 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5026 */;
import SameValue from "SameValue" /* 5027 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5028 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
      let tmp13 = arg2;
      if (!_mod5022(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5022(tmp13)) {
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