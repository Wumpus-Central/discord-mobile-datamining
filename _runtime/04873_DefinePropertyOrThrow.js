// === Module 4873: DefinePropertyOrThrow ===

// Module 4873 (DefinePropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4823 from "module_4823" /* 4823 */;
import _mod4870 from "module_4870" /* 4870 */;
import _mod4874 from "module_4874" /* 4874 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4875 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4877 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4878 */;
import SameValue from "SameValue" /* 4879 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4880 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4823(arg0)) {
    if (_mod4870(arg1)) {
      let tmp13 = arg2;
      if (!_mod4874(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4874(tmp13)) {
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