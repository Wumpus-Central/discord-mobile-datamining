// _runtime/05386_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import isPropertyDescriptor from "05380_isPropertyDescriptor.js";
import fromPropertyDescriptor from "05387_fromPropertyDescriptor.js";

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
}
