// === Module 4904: DefinePropertyOrThrow ===

// Module 4904 (DefinePropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4854 from "module_4854" /* 4854 */;
import _mod4901 from "module_4901" /* 4901 */;
import _mod4905 from "module_4905" /* 4905 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4906 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4908 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4909 */;
import SameValue from "SameValue" /* 4910 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4911 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
      let tmp13 = arg2;
      if (!_mod4905(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4905(tmp13)) {
        const tmpResult = IsDataDescriptor;
        return tmpResult(tmpResult, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1283("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};