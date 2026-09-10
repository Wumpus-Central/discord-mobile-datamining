// _runtime/04911_FromPropertyDescriptor.js
import _mod1283 from "metro/01283__.js";
import _mod4905 from "metro/04905__.js";
import _mod4912 from "metro/04912__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4905(arg0)) {
      const tmp5 = new _mod1283("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4912(arg0);
}
