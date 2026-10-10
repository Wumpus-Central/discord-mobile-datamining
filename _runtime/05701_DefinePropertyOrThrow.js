// _runtime/05701_DefinePropertyOrThrow.js
import _mod1306 from "metro/01306__.js";
import _mod5651 from "metro/05651__.js";
import _mod5698 from "metro/05698__.js";
import _mod5702 from "metro/05702__.js";
import ToPropertyDescriptor from "05703_ToPropertyDescriptor.js";
import DefineOwnProperty from "05705_DefineOwnProperty.js";
import IsDataDescriptor from "05706_IsDataDescriptor.js";
import SameValue from "05707_SameValue.js";
import FromPropertyDescriptor from "05708_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
      let tmp13 = arg2;
      if (!_mod5702(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5702(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1306("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1306("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
