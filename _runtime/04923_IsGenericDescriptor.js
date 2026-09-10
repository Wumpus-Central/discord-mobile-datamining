// _runtime/04923_IsGenericDescriptor.js
import _mod1283 from "metro/01283__.js";
import _mod4905 from "metro/04905__.js";
import IsDataDescriptor from "04909_IsDataDescriptor.js";
import IsAccessorDescriptor from "04918_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4905(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
