// === Module 4937: DefinePropertyOrThrow ===

// Module 4937 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4887 from "module_4887" /* 4887 */;
import _mod4934 from "module_4934" /* 4934 */;
import _mod4938 from "module_4938" /* 4938 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4939 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4941 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4942 */;
import SameValue from "SameValue" /* 4943 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4944 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4887(arg0)) {
    if (_mod4934(arg1)) {
      let tmp13 = arg2;
      if (!_mod4938(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4938(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1282("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};