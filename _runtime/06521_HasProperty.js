// _runtime/06521_HasProperty.js
import _mod1293 from "metro/01293__.js";
import _mod6462 from "metro/06462__.js";
import _mod6509 from "metro/06509__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
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
