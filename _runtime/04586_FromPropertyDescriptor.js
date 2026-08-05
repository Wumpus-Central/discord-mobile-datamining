// _runtime/04586_FromPropertyDescriptor.js

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require("04580_isPropertyDescriptor.js") /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require("04587_fromPropertyDescriptor.js") /* fromPropertyDescriptor */(arg0);
};