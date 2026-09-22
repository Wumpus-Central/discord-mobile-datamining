// _runtime/05064_HasProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5005 from "metro/05005__.js";
import _mod5052 from "metro/05052__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod5005(arg0)) {
    if (_mod5052(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1282("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
