// _runtime/05708_FromPropertyDescriptor.js
import _mod1306 from "metro/01306__.js";
import _mod5702 from "metro/05702__.js";
import _mod5709 from "metro/05709__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5702(arg0)) {
      const tmp5 = new _mod1306("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5709(arg0);
}
