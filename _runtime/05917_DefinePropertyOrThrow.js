// === Module 5917: DefinePropertyOrThrow ===

// Module 5917 (DefinePropertyOrThrow)
import _mod1306 from "module_1306" /* 1306 */;
import _mod5867 from "module_5867" /* 5867 */;
import _mod5914 from "module_5914" /* 5914 */;
import _mod5918 from "module_5918" /* 5918 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5919 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5921 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5922 */;
import SameValue from "SameValue" /* 5923 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5924 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5867(arg0)) {
    if (_mod5914(arg1)) {
      let tmp13 = arg2;
      if (!_mod5918(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5918(tmp13)) {
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