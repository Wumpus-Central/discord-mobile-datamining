// _runtime/04646_FromPropertyDescriptor.js
import { isPropertyDescriptor } from "04640_isPropertyDescriptor.js";
import { fromPropertyDescriptor } from "04647_fromPropertyDescriptor.js";

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