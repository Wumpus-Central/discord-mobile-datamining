// _runtime/05924_FromPropertyDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod5918 from "metro/05918__.js";
import _mod5925 from "metro/05925__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5918(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5925(arg0);
}
