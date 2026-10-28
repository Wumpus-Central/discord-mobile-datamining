// _runtime/06475_DefinePropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod6425 from "metro/06425__.js";
import _mod6472 from "metro/06472__.js";
import _mod6476 from "metro/06476__.js";
import ToPropertyDescriptor from "06477_ToPropertyDescriptor.js";
import DefineOwnProperty from "06479_DefineOwnProperty.js";
import IsDataDescriptor from "06480_IsDataDescriptor.js";
import SameValue from "06481_SameValue.js";
import FromPropertyDescriptor from "06482_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
      let tmp13 = arg2;
      if (!_mod6476(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6476(tmp13)) {
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
