// _runtime/06506_DefinePropertyOrThrow.js
import _mod1294 from "metro/01294__.js";
import _mod6456 from "metro/06456__.js";
import _mod6503 from "metro/06503__.js";
import _mod6507 from "metro/06507__.js";
import ToPropertyDescriptor from "06508_ToPropertyDescriptor.js";
import DefineOwnProperty from "06510_DefineOwnProperty.js";
import IsDataDescriptor from "06511_IsDataDescriptor.js";
import SameValue from "06512_SameValue.js";
import FromPropertyDescriptor from "06513_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      let tmp13 = arg2;
      if (!_mod6507(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6507(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1294("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1294("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
