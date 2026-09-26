// _runtime/05149_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5099 from "metro/05099__.js";
import _mod5146 from "metro/05146__.js";
import _mod5150 from "metro/05150__.js";
import ToPropertyDescriptor from "05151_ToPropertyDescriptor.js";
import DefineOwnProperty from "05153_DefineOwnProperty.js";
import IsDataDescriptor from "05154_IsDataDescriptor.js";
import SameValue from "05155_SameValue.js";
import FromPropertyDescriptor from "05156_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5099(arg0)) {
    if (_mod5146(arg1)) {
      let tmp13 = arg2;
      if (!_mod5150(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5150(tmp13)) {
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
