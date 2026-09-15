// _runtime/04943_IsDataDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod1314 from "metro/01314__.js";
import _mod4939 from "metro/04939__.js";

export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod4939(arg0)) {
    const tmp7 = _mod1314(arg0, "[[Value]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1314(arg0, "[[Writable]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
