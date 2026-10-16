// _runtime/05933_IsAccessorDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod1340 from "metro/01340__.js";
import _mod5920 from "metro/05920__.js";

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5920(arg0)) {
    const tmp7 = _mod1340(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1340(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
