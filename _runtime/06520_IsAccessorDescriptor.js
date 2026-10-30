// _runtime/06520_IsAccessorDescriptor.js
import _mod1294 from "metro/01294__.js";
import _mod1326 from "metro/01326__.js";
import _mod6507 from "metro/06507__.js";

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod6507(arg0)) {
    const tmp7 = _mod1326(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1326(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
