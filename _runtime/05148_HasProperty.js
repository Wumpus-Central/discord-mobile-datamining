// _runtime/05148_HasProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5089 from "metro/05089__.js";
import _mod5136 from "metro/05136__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
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
