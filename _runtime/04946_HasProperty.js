// _runtime/04946_HasProperty.js
import _mod1282 from "metro/01282__.js";
import _mod4887 from "metro/04887__.js";
import _mod4934 from "metro/04934__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod4887(arg0)) {
    if (_mod4934(arg1)) {
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
