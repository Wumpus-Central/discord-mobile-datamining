// _runtime/04947_HasProperty.js
import _mod1282 from "metro/01282__.js";
import _mod4888 from "metro/04888__.js";
import _mod4935 from "metro/04935__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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
