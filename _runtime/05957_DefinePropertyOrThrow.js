// === Module 5957: DefinePropertyOrThrow ===

// Module 5957 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5907 from "module_5907" /* 5907 */;
import _mod5954 from "module_5954" /* 5954 */;
import _mod5958 from "module_5958" /* 5958 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5959 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5961 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5962 */;
import SameValue from "SameValue" /* 5963 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5964 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5907(arg0)) {
    if (_mod5954(arg1)) {
      let tmp13 = arg2;
      if (!_mod5958(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5958(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1308("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};