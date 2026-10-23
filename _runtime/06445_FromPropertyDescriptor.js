// _runtime/06445_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6439 from "metro/06439__.js";
import _mod6446 from "metro/06446__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6439(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6446(arg0);
}
