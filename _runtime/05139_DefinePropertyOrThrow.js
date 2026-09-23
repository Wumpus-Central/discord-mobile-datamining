// === Module 5139: DefinePropertyOrThrow ===

// Module 5139 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5089 from "module_5089" /* 5089 */;
import _mod5136 from "module_5136" /* 5136 */;
import _mod5140 from "module_5140" /* 5140 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5141 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5143 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5144 */;
import SameValue from "SameValue" /* 5145 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5146 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
      let tmp13 = arg2;
      if (!_mod5140(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5140(tmp13)) {
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