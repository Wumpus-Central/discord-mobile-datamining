// _runtime/05345_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5295 from "metro/05295__.js";
import _mod5342 from "metro/05342__.js";
import _mod5346 from "metro/05346__.js";
import ToPropertyDescriptor from "05347_ToPropertyDescriptor.js";
import DefineOwnProperty from "05349_DefineOwnProperty.js";
import IsDataDescriptor from "05350_IsDataDescriptor.js";
import SameValue from "05351_SameValue.js";
import FromPropertyDescriptor from "05352_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (_mod5342(arg1)) {
      let tmp13 = arg2;
      if (!_mod5346(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5346(tmp13)) {
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
