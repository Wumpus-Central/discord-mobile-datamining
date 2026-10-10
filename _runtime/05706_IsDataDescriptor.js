// === Module 5706: IsDataDescriptor ===

// Module 5706 (IsDataDescriptor)
import _mod1306 from "module_1306" /* 1306 */;
import _mod1338 from "module_1338" /* 1338 */;
import _mod5702 from "module_5702" /* 5702 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (_mod5702(arg0)) {
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
};