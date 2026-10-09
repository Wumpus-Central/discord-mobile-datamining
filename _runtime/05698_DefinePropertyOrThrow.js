// _runtime/05698_DefinePropertyOrThrow.js
import _mod1306 from "metro/01306__.js";
import _mod5648 from "metro/05648__.js";
import _mod5695 from "metro/05695__.js";
import _mod5699 from "metro/05699__.js";
import ToPropertyDescriptor from "05700_ToPropertyDescriptor.js";
import DefineOwnProperty from "05702_DefineOwnProperty.js";
import IsDataDescriptor from "05703_IsDataDescriptor.js";
import SameValue from "05704_SameValue.js";
import FromPropertyDescriptor from "05705_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
      let tmp13 = arg2;
      if (!_mod5699(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5699(tmp13)) {
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
