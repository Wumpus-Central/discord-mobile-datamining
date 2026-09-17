// _runtime/04946_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod4940 from "metro/04940__.js";
import _mod4947 from "metro/04947__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod4940(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod4947(arg0);
}
