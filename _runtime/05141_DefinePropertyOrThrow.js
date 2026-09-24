// === Module 5141: DefinePropertyOrThrow ===

// Module 5141 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5091 from "module_5091" /* 5091 */;
import _mod5138 from "module_5138" /* 5138 */;
import _mod5142 from "module_5142" /* 5142 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5143 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5145 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5146 */;
import SameValue from "SameValue" /* 5147 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5148 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5091(arg0)) {
    if (_mod5138(arg1)) {
      let tmp13 = arg2;
      if (!_mod5142(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5142(tmp13)) {
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