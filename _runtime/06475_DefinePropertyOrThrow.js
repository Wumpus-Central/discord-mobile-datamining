// === Module 6475: DefinePropertyOrThrow ===

// Module 6475 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod6425 from "module_6425" /* 6425 */;
import _mod6472 from "module_6472" /* 6472 */;
import _mod6476 from "module_6476" /* 6476 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6477 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6479 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6480 */;
import SameValue from "SameValue" /* 6481 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6482 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
      let tmp13 = arg2;
      if (!_mod6476(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6476(tmp13)) {
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