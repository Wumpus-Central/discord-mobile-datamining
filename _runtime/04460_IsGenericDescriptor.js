// _runtime/04460_IsGenericDescriptor.js
import _mod541 from "metro/00541__.js";
import isPropertyDescriptor from "04442_isPropertyDescriptor.js";
import IsDataDescriptor from "04446_IsDataDescriptor.js";
import IsAccessorDescriptor from "04455_IsAccessorDescriptor.js";


export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};