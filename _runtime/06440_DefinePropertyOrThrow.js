// _runtime/06440_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6390 from "metro/06390__.js";
import _mod6437 from "metro/06437__.js";
import _mod6441 from "metro/06441__.js";
import ToPropertyDescriptor from "06442_ToPropertyDescriptor.js";
import DefineOwnProperty from "06444_DefineOwnProperty.js";
import IsDataDescriptor from "06445_IsDataDescriptor.js";
import SameValue from "06446_SameValue.js";
import FromPropertyDescriptor from "06447_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
      let tmp13 = arg2;
      if (!_mod6441(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6441(tmp13)) {
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
