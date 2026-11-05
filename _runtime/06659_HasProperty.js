// _runtime/06659_HasProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6600 from "metro/06600__.js";
import _mod6647 from "metro/06647__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1293("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
