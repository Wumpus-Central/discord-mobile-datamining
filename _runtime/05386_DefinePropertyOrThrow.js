// _runtime/05386_DefinePropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod5336 from "metro/05336__.js";
import _mod5383 from "metro/05383__.js";
import _mod5387 from "metro/05387__.js";
import ToPropertyDescriptor from "05388_ToPropertyDescriptor.js";
import DefineOwnProperty from "05390_DefineOwnProperty.js";
import IsDataDescriptor from "05391_IsDataDescriptor.js";
import SameValue from "05392_SameValue.js";
import FromPropertyDescriptor from "05393_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
      let tmp13 = arg2;
      if (!_mod5387(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5387(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
