// _runtime/05706_HasProperty.js
import _mod1305 from "metro/01305__.js";
import _mod5647 from "metro/05647__.js";
import _mod5694 from "metro/05694__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1305("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
