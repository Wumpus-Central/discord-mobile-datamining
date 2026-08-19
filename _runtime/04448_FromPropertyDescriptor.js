// _runtime/04448_FromPropertyDescriptor.js
import _mod541 from "metro/00541__.js";
import isPropertyDescriptor from "04442_isPropertyDescriptor.js";
import fromPropertyDescriptor from "04449_fromPropertyDescriptor.js";


export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!isPropertyDescriptor(arg0)) {
      const tmp5 = new _mod541("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return fromPropertyDescriptor(arg0);
};