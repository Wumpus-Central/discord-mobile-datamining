// _runtime/05939_IsGenericDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod5921 from "metro/05921__.js";
import IsDataDescriptor from "05925_IsDataDescriptor.js";
import IsAccessorDescriptor from "05934_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5921(arg0)) {
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
