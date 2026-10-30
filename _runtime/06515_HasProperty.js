// _runtime/06515_HasProperty.js
import _mod1294 from "metro/01294__.js";
import _mod6456 from "metro/06456__.js";
import _mod6503 from "metro/06503__.js";

export default function HasProperty(arg0, arg1) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      return arg1 in arg0;
    } else {
      const tmp10 = new _mod1294("Assertion failed: `P` must be a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: `O` must be an Object");
    throw tmp5;
  }
}
