import { isPropertyDescriptor } from "04580_isPropertyDescriptor.js";
// _runtime/04584_IsDataDescriptor.js

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(573)(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(573)(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};