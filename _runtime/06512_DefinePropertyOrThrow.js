// _runtime/06512_DefinePropertyOrThrow.js
import _mod1293 from "metro/01293__.js";
import _mod6462 from "metro/06462__.js";
import _mod6509 from "metro/06509__.js";
import _mod6513 from "metro/06513__.js";
import ToPropertyDescriptor from "06514_ToPropertyDescriptor.js";
import DefineOwnProperty from "06516_DefineOwnProperty.js";
import IsDataDescriptor from "06517_IsDataDescriptor.js";
import SameValue from "06518_SameValue.js";
import FromPropertyDescriptor from "06519_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
      let tmp13 = arg2;
      if (!_mod6513(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6513(tmp13)) {
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
