// _runtime/06430_IsDataDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod1340 from "metro/01340__.js";
import _mod6426 from "metro/06426__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6426(arg0)) {
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
