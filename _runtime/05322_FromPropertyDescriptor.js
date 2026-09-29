// _runtime/05322_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5316 from "metro/05316__.js";
import _mod5323 from "metro/05323__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5316(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5323(arg0);
}
