// === Module 6499: DefinePropertyOrThrow ===

// Module 6499 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6449 from "module_6449" /* 6449 */;
import _mod6496 from "module_6496" /* 6496 */;
import _mod6500 from "module_6500" /* 6500 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6501 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6503 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6504 */;
import SameValue from "SameValue" /* 6505 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6506 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
      let tmp13 = arg2;
      if (!_mod6500(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6500(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1305("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};