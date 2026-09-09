// _runtime/04892_IsGenericDescriptor.js
import _mod1283 from "metro/01283__.js";
import _mod4874 from "metro/04874__.js";
import IsDataDescriptor from "04878_IsDataDescriptor.js";
import IsAccessorDescriptor from "04887_IsAccessorDescriptor.js";

export default function IsGenericDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4874(arg0)) {
    const tmp7 = IsAccessorDescriptor(arg0);
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !IsDataDescriptor(arg0);
    }
    return tmp8;
  } else {
    const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
