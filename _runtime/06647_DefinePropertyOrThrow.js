// === Module 6647: DefinePropertyOrThrow ===

// Module 6647 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6597 from "module_6597" /* 6597 */;
import _mod6644 from "module_6644" /* 6644 */;
import _mod6648 from "module_6648" /* 6648 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6649 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6651 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6652 */;
import SameValue from "SameValue" /* 6653 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6654 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6597(arg0)) {
    if (_mod6644(arg1)) {
      let tmp13 = arg2;
      if (!_mod6648(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6648(tmp13)) {
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