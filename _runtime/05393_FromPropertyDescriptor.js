// _runtime/05393_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod5387 from "metro/05387__.js";
import _mod5394 from "metro/05394__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5387(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5394(arg0);
}
