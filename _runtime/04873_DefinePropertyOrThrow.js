// _runtime/04873_DefinePropertyOrThrow.js
import _mod1283 from "metro/01283__.js";
import _mod4823 from "metro/04823__.js";
import _mod4870 from "metro/04870__.js";
import _mod4874 from "metro/04874__.js";
import ToPropertyDescriptor from "04875_ToPropertyDescriptor.js";
import DefineOwnProperty from "04877_DefineOwnProperty.js";
import IsDataDescriptor from "04878_IsDataDescriptor.js";
import SameValue from "04879_SameValue.js";
import FromPropertyDescriptor from "04880_FromPropertyDescriptor.js";

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
}
