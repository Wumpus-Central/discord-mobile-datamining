// _runtime/05964_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod5958 from "metro/05958__.js";
import _mod5965 from "metro/05965__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5958(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5965(arg0);
}
