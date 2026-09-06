// _runtime/04859_DefinePropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4809 from "metro/04809__.js";
import _mod4856 from "metro/04856__.js";
import _mod4860 from "metro/04860__.js";
import ToPropertyDescriptor from "04861_ToPropertyDescriptor.js";
import DefineOwnProperty from "04863_DefineOwnProperty.js";
import IsDataDescriptor from "04864_IsDataDescriptor.js";
import SameValue from "04865_SameValue.js";
import FromPropertyDescriptor from "04866_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
      let tmp13 = arg2;
      if (!_mod4860(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4860(tmp13)) {
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
