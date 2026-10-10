// === Module 5701: DefinePropertyOrThrow ===

// Module 5701 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5651 from "module_5651" /* 5651 */;
import _mod5698 from "module_5698" /* 5698 */;
import _mod5702 from "module_5702" /* 5702 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5703 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5705 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5706 */;
import SameValue from "SameValue" /* 5707 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5708 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
      let tmp13 = arg2;
      if (!_mod5702(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5702(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1306("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};