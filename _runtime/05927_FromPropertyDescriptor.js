// _runtime/05927_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod5921 from "metro/05921__.js";
import _mod5928 from "metro/05928__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5921(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5928(arg0);
}
