// === Module 6425: DefinePropertyOrThrow ===

// Module 6425 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6375 from "module_6375" /* 6375 */;
import _mod6422 from "module_6422" /* 6422 */;
import _mod6426 from "module_6426" /* 6426 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6427 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6429 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6430 */;
import SameValue from "SameValue" /* 6431 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6432 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
      let tmp13 = arg2;
      if (!_mod6426(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6426(tmp13)) {
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