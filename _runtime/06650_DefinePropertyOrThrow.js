// === Module 6650: DefinePropertyOrThrow ===

// Module 6650 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6600 from "module_6600" /* 6600 */;
import _mod6647 from "module_6647" /* 6647 */;
import _mod6651 from "module_6651" /* 6651 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6652 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6654 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6655 */;
import SameValue from "SameValue" /* 6656 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6657 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
      let tmp13 = arg2;
      if (!_mod6651(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6651(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};