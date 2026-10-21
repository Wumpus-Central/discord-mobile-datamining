// === Module 6419: DefinePropertyOrThrow ===

// Module 6419 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6369 from "module_6369" /* 6369 */;
import _mod6416 from "module_6416" /* 6416 */;
import _mod6420 from "module_6420" /* 6420 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6421 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6423 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6424 */;
import SameValue from "SameValue" /* 6425 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6426 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6369(arg0)) {
    if (_mod6416(arg1)) {
      let tmp13 = arg2;
      if (!_mod6420(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6420(tmp13)) {
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