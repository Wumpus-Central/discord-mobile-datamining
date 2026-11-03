// _runtime/06639_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod6633 from "metro/06633__.js";
import _mod6640 from "metro/06640__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6633(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6640(arg0);
}
