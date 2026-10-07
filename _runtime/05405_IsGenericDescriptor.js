// _runtime/05405_IsGenericDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod5387 from "metro/05387__.js";
import IsDataDescriptor from "05391_IsDataDescriptor.js";
import IsAccessorDescriptor from "05400_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5387(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
