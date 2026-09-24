// _runtime/05141_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5091 from "metro/05091__.js";
import _mod5138 from "metro/05138__.js";
import _mod5142 from "metro/05142__.js";
import ToPropertyDescriptor from "05143_ToPropertyDescriptor.js";
import DefineOwnProperty from "05145_DefineOwnProperty.js";
import IsDataDescriptor from "05146_IsDataDescriptor.js";
import SameValue from "05147_SameValue.js";
import FromPropertyDescriptor from "05148_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5091(arg0)) {
    if (_mod5138(arg1)) {
      let tmp13 = arg2;
      if (!_mod5142(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5142(tmp13)) {
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
