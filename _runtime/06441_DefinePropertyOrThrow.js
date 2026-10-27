// _runtime/06441_DefinePropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod6391 from "metro/06391__.js";
import _mod6438 from "metro/06438__.js";
import _mod6442 from "metro/06442__.js";
import ToPropertyDescriptor from "06443_ToPropertyDescriptor.js";
import DefineOwnProperty from "06445_DefineOwnProperty.js";
import IsDataDescriptor from "06446_IsDataDescriptor.js";
import SameValue from "06447_SameValue.js";
import FromPropertyDescriptor from "06448_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6391(arg0)) {
    if (_mod6438(arg1)) {
      let tmp13 = arg2;
      if (!_mod6442(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6442(tmp13)) {
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
