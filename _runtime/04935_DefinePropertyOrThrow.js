// === Module 4935: DefinePropertyOrThrow ===

// Module 4935 (DefinePropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4885 from "module_4885" /* 4885 */;
import _mod4932 from "module_4932" /* 4932 */;
import _mod4936 from "module_4936" /* 4936 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4937 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4939 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4940 */;
import SameValue from "SameValue" /* 4941 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4942 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
      let tmp13 = arg2;
      if (!_mod4936(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4936(tmp13)) {
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