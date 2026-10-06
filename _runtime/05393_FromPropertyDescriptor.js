// === Module 5393: FromPropertyDescriptor ===

// Module 5393 (FromPropertyDescriptor)
import _mod1293 from "module_1293" /* 1293 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 5387 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 5394 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp3;
    }
  }
  return fromPropertyDescriptor(arg0);
};