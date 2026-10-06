// === Module 5391: IsDataDescriptor ===

// Module 5391 (IsDataDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import bind from "bind" /* 1325 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5387 */;


export default function IsDataDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (isPropertyDescriptor(arg0)) {
    let tmp6 = !bind(arg0, "[[Value]]");
    bind(arg0, "[[Value]]");
    if (tmp6) {
      tmp6 = !bind(arg0, "[[Writable]]");
    }
    return !tmp6;
  } else {
    const self = this;
    const self2 = this;
    const tmp3 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp3;
  }
};