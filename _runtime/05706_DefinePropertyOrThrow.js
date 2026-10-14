// === Module 5706: DefinePropertyOrThrow ===

// Module 5706 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5656 from "module_5656" /* 5656 */;
import _mod5703 from "module_5703" /* 5703 */;
import _mod5707 from "module_5707" /* 5707 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5708 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5710 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5711 */;
import SameValue from "SameValue" /* 5712 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5713 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
      let tmp13 = arg2;
      if (!_mod5707(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5707(tmp13)) {
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