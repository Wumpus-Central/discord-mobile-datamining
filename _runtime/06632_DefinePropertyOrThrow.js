// === Module 6632: DefinePropertyOrThrow ===

// Module 6632 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6582 from "module_6582" /* 6582 */;
import _mod6629 from "module_6629" /* 6629 */;
import _mod6633 from "module_6633" /* 6633 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6634 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6636 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6637 */;
import SameValue from "SameValue" /* 6638 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6639 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6582(arg0)) {
    if (_mod6629(arg1)) {
      let tmp13 = arg2;
      if (!_mod6633(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6633(tmp13)) {
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