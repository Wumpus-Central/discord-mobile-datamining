// === Module 6438: DefinePropertyOrThrow ===

// Module 6438 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6388 from "module_6388" /* 6388 */;
import _mod6435 from "module_6435" /* 6435 */;
import _mod6439 from "module_6439" /* 6439 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6440 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6442 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6443 */;
import SameValue from "SameValue" /* 6444 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6445 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
      let tmp13 = arg2;
      if (!_mod6439(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6439(tmp13)) {
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