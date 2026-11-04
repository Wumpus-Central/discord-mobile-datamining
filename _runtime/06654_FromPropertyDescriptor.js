// _runtime/06654_FromPropertyDescriptor.js
import _mod1293 from "metro/01293__.js";
import _mod6648 from "metro/06648__.js";
import _mod6655 from "metro/06655__.js";

export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!_mod6648(arg0)) {
      const tmp5 = new _mod1293("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
  }
  return _mod6655(arg0);
}
