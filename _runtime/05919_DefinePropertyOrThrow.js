// === Module 5919: DefinePropertyOrThrow ===

// Module 5919 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5869 from "module_5869" /* 5869 */;
import _mod5916 from "module_5916" /* 5916 */;
import _mod5920 from "module_5920" /* 5920 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5921 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5923 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5924 */;
import SameValue from "SameValue" /* 5925 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5926 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
      let tmp13 = arg2;
      if (!_mod5920(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5920(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1308("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};