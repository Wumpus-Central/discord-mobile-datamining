// _runtime/06657_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod6651 from "metro/06651__.js";
import _mod6658 from "metro/06658__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6651(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6658(arg0);
}
