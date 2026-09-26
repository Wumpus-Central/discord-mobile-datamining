// _runtime/05168_IsGenericDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5150 from "metro/05150__.js";
import IsDataDescriptor from "05154_IsDataDescriptor.js";
import IsAccessorDescriptor from "05163_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5150(arg0)) {
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
