// _runtime/05926_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod5920 from "metro/05920__.js";
import _mod5927 from "metro/05927__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5920(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5927(arg0);
}
