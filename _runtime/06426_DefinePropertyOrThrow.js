// === Module 6426: DefinePropertyOrThrow ===

// Module 6426 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6376 from "module_6376" /* 6376 */;
import _mod6423 from "module_6423" /* 6423 */;
import _mod6427 from "module_6427" /* 6427 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6428 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6430 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6431 */;
import SameValue from "SameValue" /* 6432 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6433 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6376(arg0)) {
    if (_mod6423(arg1)) {
      let tmp13 = arg2;
      if (!_mod6427(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6427(tmp13)) {
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