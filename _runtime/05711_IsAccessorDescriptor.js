// === Module 5711: IsAccessorDescriptor ===

// Module 5711 (IsAccessorDescriptor)
import _mod1305 from "module_1305" /* 1305 */;
import _mod1337 from "module_1337" /* 1337 */;
import _mod5698 from "module_5698" /* 5698 */;


export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5698(arg0)) {
    const tmp7 = _mod1337(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !_mod1337(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};