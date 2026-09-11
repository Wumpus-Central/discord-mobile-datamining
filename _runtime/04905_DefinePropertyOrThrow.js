// _runtime/04905_DefinePropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4855 from "metro/04855__.js";
import _mod4902 from "metro/04902__.js";
import _mod4906 from "metro/04906__.js";
import ToPropertyDescriptor from "04907_ToPropertyDescriptor.js";
import DefineOwnProperty from "04909_DefineOwnProperty.js";
import IsDataDescriptor from "04910_IsDataDescriptor.js";
import SameValue from "04911_SameValue.js";
import FromPropertyDescriptor from "04912_FromPropertyDescriptor.js";

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
}
