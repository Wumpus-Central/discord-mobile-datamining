// _runtime/05398_IsGenericDescriptor.js
import _mod1293 from "metro/01293__.js";
import isPropertyDescriptor from "05380_isPropertyDescriptor.js";
import IsDataDescriptor from "05384_IsDataDescriptor.js";
import IsAccessorDescriptor from "05393_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp5 = IsAccessorDescriptor(arg0);
    const tmp6 = !tmp5 && !IsDataDescriptor(arg0);
    return tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
}
