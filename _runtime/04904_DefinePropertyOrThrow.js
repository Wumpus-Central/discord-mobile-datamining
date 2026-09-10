// _runtime/04904_DefinePropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4854 from "metro/04854__.js";
import _mod4901 from "metro/04901__.js";
import _mod4905 from "metro/04905__.js";
import ToPropertyDescriptor from "04906_ToPropertyDescriptor.js";
import DefineOwnProperty from "04908_DefineOwnProperty.js";
import IsDataDescriptor from "04909_IsDataDescriptor.js";
import SameValue from "04910_SameValue.js";
import FromPropertyDescriptor from "04911_FromPropertyDescriptor.js";

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
}
