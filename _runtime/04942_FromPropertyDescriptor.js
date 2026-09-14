// _runtime/04942_FromPropertyDescriptor.js
import _mod1281 from "metro/01281__.js";
import _mod4936 from "metro/04936__.js";
import _mod4943 from "metro/04943__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4936(arg0)) {
      const tmp5 = new _mod1281("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4943(arg0);
}
