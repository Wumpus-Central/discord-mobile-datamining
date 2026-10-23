// _runtime/06457_IsGenericDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6439 from "metro/06439__.js";
import IsDataDescriptor from "06443_IsDataDescriptor.js";
import IsAccessorDescriptor from "06452_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6439(arg0)) {
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
