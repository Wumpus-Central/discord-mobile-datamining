// _runtime/04913_HasProperty.js
import _mod1283 from "metro/01283__.js";
import _mod4854 from "metro/04854__.js";
import _mod4901 from "metro/04901__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod4854(arg0)) {
    if (_mod4901(arg1)) {
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
