// _runtime/06480_IsDataDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod1337 from "metro/01337__.js";
import _mod6476 from "metro/06476__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6476(arg0)) {
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
