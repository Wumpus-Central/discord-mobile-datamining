// _runtime/05393_IsAccessorDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod1325 from "metro/01325__.js";
import _mod5380 from "metro/05380__.js";

export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5380(arg0)) {
    const tmp7 = _mod1325(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1325(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
}
