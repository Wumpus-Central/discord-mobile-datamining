// _runtime/04866_FromPropertyDescriptor.js
import _mod4860 from "metro/04860__.js";
import _mod4867 from "metro/04867__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4860(arg0)) {
      const tmp5 = new tmp(1283)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return _mod4867(arg0);
}
