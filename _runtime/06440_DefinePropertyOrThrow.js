// === Module 6440: DefinePropertyOrThrow ===

// Module 6440 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6390 from "module_6390" /* 6390 */;
import _mod6437 from "module_6437" /* 6437 */;
import _mod6441 from "module_6441" /* 6441 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6442 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6444 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6445 */;
import SameValue from "SameValue" /* 6446 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6447 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
      let tmp13 = arg2;
      if (!_mod6441(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6441(tmp13)) {
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