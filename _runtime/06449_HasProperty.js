// _runtime/06449_HasProperty.js
import _mod1308 from "metro/01308__.js";
import _mod6390 from "metro/06390__.js";
import _mod6437 from "metro/06437__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod6390(arg0)) {
    if (_mod6437(arg1)) {
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
