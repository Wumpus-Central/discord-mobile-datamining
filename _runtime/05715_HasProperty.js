// _runtime/05715_HasProperty.js
import _mod1306 from "metro/01306__.js";
import _mod5656 from "metro/05656__.js";
import _mod5703 from "metro/05703__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1306("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
