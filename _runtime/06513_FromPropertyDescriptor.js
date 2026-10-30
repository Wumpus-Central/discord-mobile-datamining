// _runtime/06513_FromPropertyDescriptor.js
import _mod1294 from "metro/01294__.js";
import _mod6507 from "metro/06507__.js";
import _mod6514 from "metro/06514__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6507(arg0)) {
      const tmp5 = new _mod1294("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6514(arg0);
}
