// _runtime/06669_IsGenericDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod6651 from "metro/06651__.js";
import IsDataDescriptor from "06655_IsDataDescriptor.js";
import IsAccessorDescriptor from "06664_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6651(arg0)) {
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
