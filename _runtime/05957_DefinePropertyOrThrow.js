// _runtime/05957_DefinePropertyOrThrow.js
import _mod1308 from "metro/01308__.js";
import _mod5907 from "metro/05907__.js";
import _mod5954 from "metro/05954__.js";
import _mod5958 from "metro/05958__.js";
import ToPropertyDescriptor from "05959_ToPropertyDescriptor.js";
import DefineOwnProperty from "05961_DefineOwnProperty.js";
import IsDataDescriptor from "05962_IsDataDescriptor.js";
import SameValue from "05963_SameValue.js";
import FromPropertyDescriptor from "05964_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5907(arg0)) {
    if (_mod5954(arg1)) {
      let tmp13 = arg2;
      if (!_mod5958(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5958(tmp13)) {
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
