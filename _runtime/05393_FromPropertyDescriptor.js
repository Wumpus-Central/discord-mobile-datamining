// _runtime/05393_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import isPropertyDescriptor from "05387_isPropertyDescriptor.js";
import fromPropertyDescriptor from "05394_fromPropertyDescriptor.js";

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
