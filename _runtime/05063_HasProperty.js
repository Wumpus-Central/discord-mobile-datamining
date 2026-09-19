// _runtime/05063_HasProperty.js
import _mod1282 from "metro/01282__.js";
import _mod5004 from "metro/05004__.js";
import _mod5051 from "metro/05051__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
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
