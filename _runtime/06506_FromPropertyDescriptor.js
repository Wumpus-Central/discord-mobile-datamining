// _runtime/06506_FromPropertyDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod6500 from "metro/06500__.js";
import _mod6507 from "metro/06507__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6500(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6507(arg0);
}
