// _runtime/05062_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5056 from "metro/05056__.js";
import _mod5063 from "metro/05063__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5056(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5063(arg0);
}
