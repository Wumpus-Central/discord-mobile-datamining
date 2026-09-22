// _runtime/05055_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5005 from "metro/05005__.js";
import _mod5052 from "metro/05052__.js";
import _mod5056 from "metro/05056__.js";
import ToPropertyDescriptor from "05057_ToPropertyDescriptor.js";
import DefineOwnProperty from "05059_DefineOwnProperty.js";
import IsDataDescriptor from "05060_IsDataDescriptor.js";
import SameValue from "05061_SameValue.js";
import FromPropertyDescriptor from "05062_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5005(arg0)) {
    if (_mod5052(arg1)) {
      let tmp13 = arg2;
      if (!_mod5056(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5056(tmp13)) {
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
