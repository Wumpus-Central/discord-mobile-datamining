// _runtime/05920_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod5870 from "metro/05870__.js";
import _mod5917 from "metro/05917__.js";
import _mod5921 from "metro/05921__.js";
import ToPropertyDescriptor from "05922_ToPropertyDescriptor.js";
import DefineOwnProperty from "05924_DefineOwnProperty.js";
import IsDataDescriptor from "05925_IsDataDescriptor.js";
import SameValue from "05926_SameValue.js";
import FromPropertyDescriptor from "05927_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
      let tmp13 = arg2;
      if (!_mod5921(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5921(tmp13)) {
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
