// _runtime/05717_IsGenericDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod5699 from "metro/05699__.js";
import IsDataDescriptor from "05703_IsDataDescriptor.js";
import IsAccessorDescriptor from "05712_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5699(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
