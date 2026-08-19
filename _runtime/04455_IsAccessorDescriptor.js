// _runtime/04455_IsAccessorDescriptor.js
import _mod541 from "metro/00541__.js";
import bind from "00573_bind.js";
import isPropertyDescriptor from "04442_isPropertyDescriptor.js";


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    const tmp7 = bind(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !bind(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};