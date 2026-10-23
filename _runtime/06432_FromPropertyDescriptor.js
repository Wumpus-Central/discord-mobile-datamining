// _runtime/06432_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6426 from "metro/06426__.js";
import _mod6433 from "metro/06433__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6426(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6433(arg0);
}
