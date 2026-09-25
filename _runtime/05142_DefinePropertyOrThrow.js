// _runtime/05142_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5092 from "metro/05092__.js";
import _mod5139 from "metro/05139__.js";
import _mod5143 from "metro/05143__.js";
import ToPropertyDescriptor from "05144_ToPropertyDescriptor.js";
import DefineOwnProperty from "05146_DefineOwnProperty.js";
import IsDataDescriptor from "05147_IsDataDescriptor.js";
import SameValue from "05148_SameValue.js";
import FromPropertyDescriptor from "05149_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5092(arg0)) {
    if (_mod5139(arg1)) {
      let tmp13 = arg2;
      if (!_mod5143(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5143(tmp13)) {
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
