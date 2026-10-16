// _runtime/05919_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod5869 from "metro/05869__.js";
import _mod5916 from "metro/05916__.js";
import _mod5920 from "metro/05920__.js";
import ToPropertyDescriptor from "05921_ToPropertyDescriptor.js";
import DefineOwnProperty from "05923_DefineOwnProperty.js";
import IsDataDescriptor from "05924_IsDataDescriptor.js";
import SameValue from "05925_SameValue.js";
import FromPropertyDescriptor from "05926_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5869(arg0)) {
    if (_mod5916(arg1)) {
      let tmp13 = arg2;
      if (!_mod5920(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5920(tmp13)) {
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
