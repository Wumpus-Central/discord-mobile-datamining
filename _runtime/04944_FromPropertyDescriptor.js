// _runtime/04944_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod4938 from "metro/04938__.js";
import _mod4945 from "metro/04945__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4938(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4945(arg0);
}
