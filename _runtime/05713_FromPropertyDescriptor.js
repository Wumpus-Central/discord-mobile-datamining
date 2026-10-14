// _runtime/05713_FromPropertyDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod5707 from "metro/05707__.js";
import _mod5714 from "metro/05714__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5707(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5714(arg0);
}
