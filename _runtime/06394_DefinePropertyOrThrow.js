// _runtime/06394_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod6344 from "metro/06344__.js";
import _mod6391 from "metro/06391__.js";
import _mod6395 from "metro/06395__.js";
import ToPropertyDescriptor from "06396_ToPropertyDescriptor.js";
import DefineOwnProperty from "06398_DefineOwnProperty.js";
import IsDataDescriptor from "06399_IsDataDescriptor.js";
import SameValue from "06400_SameValue.js";
import FromPropertyDescriptor from "06401_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6344(arg0)) {
    if (_mod6391(arg1)) {
      let tmp13 = arg2;
      if (!_mod6395(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6395(tmp13)) {
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
