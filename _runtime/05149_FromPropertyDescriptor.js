// _runtime/05149_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5143 from "metro/05143__.js";
import _mod5150 from "metro/05150__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5143(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5150(arg0);
}
