// === Module 4448: FromPropertyDescriptor ===

// Module 4448 (FromPropertyDescriptor)
import _mod541 from "module_541" /* 541 */;
import isPropertyDescriptor from "isPropertyDescriptor" /* 4442 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4449 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return fromPropertyDescriptor(arg0);
};