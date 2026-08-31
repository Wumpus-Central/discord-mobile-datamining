// === Module 4787: FromPropertyDescriptor ===

// Module 4787 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4781 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4788 */;


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