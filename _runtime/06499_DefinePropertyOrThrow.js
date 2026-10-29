// _runtime/06499_DefinePropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod6449 from "metro/06449__.js";
import _mod6496 from "metro/06496__.js";
import _mod6500 from "metro/06500__.js";
import ToPropertyDescriptor from "06501_ToPropertyDescriptor.js";
import DefineOwnProperty from "06503_DefineOwnProperty.js";
import IsDataDescriptor from "06504_IsDataDescriptor.js";
import SameValue from "06505_SameValue.js";
import FromPropertyDescriptor from "06506_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6449(arg0)) {
    if (_mod6496(arg1)) {
      let tmp13 = arg2;
      if (!_mod6500(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6500(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1305("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
