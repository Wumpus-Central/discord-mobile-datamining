// _runtime/06447_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6441 from "metro/06441__.js";
import _mod6448 from "metro/06448__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6441(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6448(arg0);
}
