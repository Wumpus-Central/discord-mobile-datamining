// _runtime/05148_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5142 from "metro/05142__.js";
import _mod5149 from "metro/05149__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5142(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5149(arg0);
}
