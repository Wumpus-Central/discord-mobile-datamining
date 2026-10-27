// _runtime/06448_FromPropertyDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod6442 from "metro/06442__.js";
import _mod6449 from "metro/06449__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6442(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6449(arg0);
}
