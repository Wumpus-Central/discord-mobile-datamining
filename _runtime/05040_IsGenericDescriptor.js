// _runtime/05040_IsGenericDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5022 from "metro/05022__.js";
import IsDataDescriptor from "05026_IsDataDescriptor.js";
import IsAccessorDescriptor from "05035_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5022(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
