// _runtime/06519_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod6513 from "metro/06513__.js";
import _mod6520 from "metro/06520__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6513(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6520(arg0);
}
