// _runtime/06525_IsGenericDescriptor.js
import _mod1294 from "metro/01294__.js";
import _mod6507 from "metro/06507__.js";
import IsDataDescriptor from "06511_IsDataDescriptor.js";
import IsAccessorDescriptor from "06520_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6507(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
