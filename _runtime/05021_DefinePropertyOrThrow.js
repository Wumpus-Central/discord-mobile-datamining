// _runtime/05021_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod4971 from "metro/04971__.js";
import _mod5018 from "metro/05018__.js";
import _mod5022 from "metro/05022__.js";
import ToPropertyDescriptor from "05023_ToPropertyDescriptor.js";
import DefineOwnProperty from "05025_DefineOwnProperty.js";
import IsDataDescriptor from "05026_IsDataDescriptor.js";
import SameValue from "05027_SameValue.js";
import FromPropertyDescriptor from "05028_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4971(arg0)) {
    if (_mod5018(arg1)) {
      let tmp13 = arg2;
      if (!_mod5022(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5022(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1282("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
