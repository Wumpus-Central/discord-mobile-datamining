// _runtime/05061_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5055 from "metro/05055__.js";
import _mod5062 from "metro/05062__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5055(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5062(arg0);
}
