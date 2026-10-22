// _runtime/06433_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6427 from "metro/06427__.js";
import _mod6434 from "metro/06434__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6427(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6434(arg0);
}
