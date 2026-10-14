// _runtime/05706_DefinePropertyOrThrow.js
import _mod1306 from "metro/01306__.js";
import _mod5656 from "metro/05656__.js";
import _mod5703 from "metro/05703__.js";
import _mod5707 from "metro/05707__.js";
import ToPropertyDescriptor from "05708_ToPropertyDescriptor.js";
import DefineOwnProperty from "05710_DefineOwnProperty.js";
import IsDataDescriptor from "05711_IsDataDescriptor.js";
import SameValue from "05712_SameValue.js";
import FromPropertyDescriptor from "05713_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
      let tmp13 = arg2;
      if (!_mod5707(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5707(tmp13)) {
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
