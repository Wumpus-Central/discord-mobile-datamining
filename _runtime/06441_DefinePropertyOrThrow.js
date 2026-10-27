// === Module 6441: DefinePropertyOrThrow ===

// Module 6441 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6438 from "module_6438" /* 6438 */;
import _mod6442 from "module_6442" /* 6442 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6443 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6445 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6446 */;
import SameValue from "SameValue" /* 6447 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6448 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
      let tmp13 = arg2;
      if (!_mod6442(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6442(tmp13)) {
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