// _runtime/05702_IsDataDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod1337 from "metro/01337__.js";
import _mod5698 from "metro/05698__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5698(arg0)) {
    const tmp7 = _mod1337(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1337(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
