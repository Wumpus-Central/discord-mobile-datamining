// _runtime/05704_FromPropertyDescriptor.js
import _mod1305 from "metro/01305__.js";
import _mod5698 from "metro/05698__.js";
import _mod5705 from "metro/05705__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5698(arg0)) {
      const tmp5 = new _mod1305("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5705(arg0);
}
