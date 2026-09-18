// _runtime/05028_FromPropertyDescriptor.js
import _mod1282 from "metro/01282__.js";
import _mod5022 from "metro/05022__.js";
import _mod5029 from "metro/05029__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod5022(arg0)) {
      const tmp5 = new _mod1282("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod5029(arg0);
}
