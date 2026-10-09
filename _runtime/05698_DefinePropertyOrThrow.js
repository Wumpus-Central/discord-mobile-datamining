// === Module 5698: DefinePropertyOrThrow ===

// Module 5698 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5648 from "module_5648" /* 5648 */;
import _mod5695 from "module_5695" /* 5695 */;
import _mod5699 from "module_5699" /* 5699 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5700 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5702 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5703 */;
import SameValue from "SameValue" /* 5704 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5705 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
      let tmp13 = arg2;
      if (!_mod5699(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5699(tmp13)) {
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