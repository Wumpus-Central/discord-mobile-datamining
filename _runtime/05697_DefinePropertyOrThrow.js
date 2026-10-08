// _runtime/05697_DefinePropertyOrThrow.js
import _mod1305 from "metro/01305__.js";
import _mod5647 from "metro/05647__.js";
import _mod5694 from "metro/05694__.js";
import _mod5698 from "metro/05698__.js";
import ToPropertyDescriptor from "05699_ToPropertyDescriptor.js";
import DefineOwnProperty from "05701_DefineOwnProperty.js";
import IsDataDescriptor from "05702_IsDataDescriptor.js";
import SameValue from "05703_SameValue.js";
import FromPropertyDescriptor from "05704_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
      let tmp13 = arg2;
      if (!_mod5698(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5698(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1305("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
