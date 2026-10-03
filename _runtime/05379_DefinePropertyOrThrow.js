// _runtime/05379_DefinePropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod5329 from "metro/05329__.js";
import _mod5376 from "metro/05376__.js";
import _mod5380 from "metro/05380__.js";
import ToPropertyDescriptor from "05381_ToPropertyDescriptor.js";
import DefineOwnProperty from "05383_DefineOwnProperty.js";
import IsDataDescriptor from "05384_IsDataDescriptor.js";
import SameValue from "05385_SameValue.js";
import FromPropertyDescriptor from "05386_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5329(arg0)) {
    if (_mod5376(arg1)) {
      let tmp13 = arg2;
      if (!_mod5380(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5380(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}
