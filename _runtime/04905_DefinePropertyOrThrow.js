// === Module 4905: DefinePropertyOrThrow ===

// Module 4905 (DefinePropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4855 from "module_4855" /* 4855 */;
import _mod4902 from "module_4902" /* 4902 */;
import _mod4906 from "module_4906" /* 4906 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4907 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4909 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4910 */;
import SameValue from "SameValue" /* 4911 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4912 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4855(arg0)) {
    if (_mod4902(arg1)) {
      let tmp13 = arg2;
      if (!_mod4906(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4906(tmp13)) {
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