// _runtime/06419_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6369 from "metro/06369__.js";
import _mod6416 from "metro/06416__.js";
import _mod6420 from "metro/06420__.js";
import ToPropertyDescriptor from "06421_ToPropertyDescriptor.js";
import DefineOwnProperty from "06423_DefineOwnProperty.js";
import IsDataDescriptor from "06424_IsDataDescriptor.js";
import SameValue from "06425_SameValue.js";
import FromPropertyDescriptor from "06426_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6369(arg0)) {
    if (_mod6416(arg1)) {
      let tmp13 = arg2;
      if (!_mod6420(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6420(tmp13)) {
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
