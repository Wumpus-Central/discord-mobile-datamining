// _runtime/05391_IsDataDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod1325 from "metro/01325__.js";
import _mod5387 from "metro/05387__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5387(arg0)) {
    const tmp7 = _mod1325(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1325(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
