// _runtime/05054_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5004 from "metro/05004__.js";
import _mod5051 from "metro/05051__.js";
import _mod5055 from "metro/05055__.js";
import ToPropertyDescriptor from "05056_ToPropertyDescriptor.js";
import DefineOwnProperty from "05058_DefineOwnProperty.js";
import IsDataDescriptor from "05059_IsDataDescriptor.js";
import SameValue from "05060_SameValue.js";
import FromPropertyDescriptor from "05061_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
      let tmp13 = arg2;
      if (!_mod5055(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5055(tmp13)) {
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
