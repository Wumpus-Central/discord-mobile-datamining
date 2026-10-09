// _runtime/05703_IsDataDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod1338 from "metro/01338__.js";
import _mod5699 from "metro/05699__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5699(arg0)) {
    const tmp7 = _mod1338(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1338(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
