// _runtime/05352_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5346 from "metro/05346__.js";
import _mod5353 from "metro/05353__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5346(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5353(arg0);
}
