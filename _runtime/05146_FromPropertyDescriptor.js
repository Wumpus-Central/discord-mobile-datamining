// _runtime/05146_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5140 from "metro/05140__.js";
import _mod5147 from "metro/05147__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5140(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5147(arg0);
}
