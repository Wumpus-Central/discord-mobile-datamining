// _runtime/06401_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6395 from "metro/06395__.js";
import _mod6402 from "metro/06402__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6395(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6402(arg0);
}
