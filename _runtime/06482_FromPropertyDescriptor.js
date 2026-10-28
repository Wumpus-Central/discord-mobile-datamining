// _runtime/06482_FromPropertyDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod6476 from "metro/06476__.js";
import _mod6483 from "metro/06483__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6476(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6483(arg0);
}
