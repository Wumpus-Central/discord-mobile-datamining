// _runtime/06438_IsGenericDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6420 from "metro/06420__.js";
import IsDataDescriptor from "06424_IsDataDescriptor.js";
import IsAccessorDescriptor from "06433_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6420(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
