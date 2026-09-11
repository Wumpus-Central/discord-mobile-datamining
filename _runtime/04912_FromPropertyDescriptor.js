// _runtime/04912_FromPropertyDescriptor.js
import _mod1283 from "metro/01283__.js";
import _mod4906 from "metro/04906__.js";
import _mod4913 from "metro/04913__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4906(arg0)) {
      const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4913(arg0);
}
