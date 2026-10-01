// _runtime/05333_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod5283 from "metro/05283__.js";
import _mod5330 from "metro/05330__.js";
import _mod5334 from "metro/05334__.js";
import ToPropertyDescriptor from "05335_ToPropertyDescriptor.js";
import DefineOwnProperty from "05337_DefineOwnProperty.js";
import IsDataDescriptor from "05338_IsDataDescriptor.js";
import SameValue from "05339_SameValue.js";
import FromPropertyDescriptor from "05340_FromPropertyDescriptor.js";

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5283(arg0)) {
    if (_mod5330(arg1)) {
      let tmp13 = arg2;
      if (!_mod5334(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5334(tmp13)) {
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
