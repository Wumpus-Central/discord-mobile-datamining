// _runtime/06518_IsGenericDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod6500 from "metro/06500__.js";
import IsDataDescriptor from "06504_IsDataDescriptor.js";
import IsAccessorDescriptor from "06513_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6500(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
