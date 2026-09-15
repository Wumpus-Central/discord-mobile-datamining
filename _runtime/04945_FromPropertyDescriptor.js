// _runtime/04945_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod4939 from "metro/04939__.js";
import _mod4946 from "metro/04946__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4939(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4946(arg0);
}
