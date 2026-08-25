// === Module 4707: FromPropertyDescriptor ===

// Module 4707 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4701 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4708 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return fromPropertyDescriptor(arg0);
};