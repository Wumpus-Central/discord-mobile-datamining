// === Module 4820: FromPropertyDescriptor ===

// Module 4820 (FromPropertyDescriptor)
import isPropertyDescriptor from "isPropertyDescriptor" /* 4814 */;
import fromPropertyDescriptor from "fromPropertyDescriptor" /* 4821 */;


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new tmp(538)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return fromPropertyDescriptor(arg0);
};