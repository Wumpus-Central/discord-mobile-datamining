// _runtime/06404_FromPropertyDescriptor.js
import _mod1308 from "metro/01308__.js";
import _mod6398 from "metro/06398__.js";
import _mod6405 from "metro/06405__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6398(arg0)) {
      const tmp5 = new _mod1308("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6405(arg0);
}
