// _runtime/05705_FromPropertyDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod5699 from "metro/05699__.js";
import _mod5706 from "metro/05706__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5699(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5706(arg0);
}
