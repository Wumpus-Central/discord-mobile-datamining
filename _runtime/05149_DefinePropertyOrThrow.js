// === Module 5149: DefinePropertyOrThrow ===

// Module 5149 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5099 from "module_5099" /* 5099 */;
import _mod5146 from "module_5146" /* 5146 */;
import _mod5150 from "module_5150" /* 5150 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5151 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5153 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5154 */;
import SameValue from "SameValue" /* 5155 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5156 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5099(arg0)) {
    if (_mod5146(arg1)) {
      let tmp13 = arg2;
      if (!_mod5150(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5150(tmp13)) {
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