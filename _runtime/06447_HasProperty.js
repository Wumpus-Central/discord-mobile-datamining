// _runtime/06447_HasProperty.js
import _mod1308 from "metro/01308__.js";
import _mod6388 from "metro/06388__.js";
import _mod6435 from "metro/06435__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod6388(arg0)) {
    if (_mod6435(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1308("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
