// _runtime/06445_IsDataDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod1340 from "metro/01340__.js";
import _mod6441 from "metro/06441__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6441(arg0)) {
    const tmp7 = _mod1340(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1340(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
