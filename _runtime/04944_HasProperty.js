// _runtime/04944_HasProperty.js
import _mod1283 from "metro/01283__.js";
import _mod4885 from "metro/04885__.js";
import _mod4932 from "metro/04932__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1283("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
