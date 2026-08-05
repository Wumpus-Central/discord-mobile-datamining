import { isPropertyDescriptor } from "04580_isPropertyDescriptor.js";
// _runtime/04598_IsGenericDescriptor.js

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(4593)(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(4584)(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};