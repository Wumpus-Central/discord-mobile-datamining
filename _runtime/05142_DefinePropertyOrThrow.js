// === Module 5142: DefinePropertyOrThrow ===

// Module 5142 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5092 from "module_5092" /* 5092 */;
import _mod5139 from "module_5139" /* 5139 */;
import _mod5143 from "module_5143" /* 5143 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5144 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5146 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5147 */;
import SameValue from "SameValue" /* 5148 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5149 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5092(arg0)) {
    if (_mod5139(arg1)) {
      let tmp13 = arg2;
      if (!_mod5143(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5143(tmp13)) {
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