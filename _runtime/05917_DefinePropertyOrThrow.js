// _runtime/05917_DefinePropertyOrThrow.js
import _mod1306 from "metro/01306__.js";
import _mod5867 from "metro/05867__.js";
import _mod5914 from "metro/05914__.js";
import _mod5918 from "metro/05918__.js";
import ToPropertyDescriptor from "05919_ToPropertyDescriptor.js";
import DefineOwnProperty from "05921_DefineOwnProperty.js";
import IsDataDescriptor from "05922_IsDataDescriptor.js";
import SameValue from "05923_SameValue.js";
import FromPropertyDescriptor from "05924_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5867(arg0)) {
    if (_mod5914(arg1)) {
      let tmp13 = arg2;
      if (!_mod5918(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5918(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1306("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
