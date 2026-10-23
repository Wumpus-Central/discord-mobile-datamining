// _runtime/06438_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6388 from "metro/06388__.js";
import _mod6435 from "metro/06435__.js";
import _mod6439 from "metro/06439__.js";
import ToPropertyDescriptor from "06440_ToPropertyDescriptor.js";
import DefineOwnProperty from "06442_DefineOwnProperty.js";
import IsDataDescriptor from "06443_IsDataDescriptor.js";
import SameValue from "06444_SameValue.js";
import FromPropertyDescriptor from "06445_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
      let tmp13 = arg2;
      if (!_mod6439(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6439(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1308("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
