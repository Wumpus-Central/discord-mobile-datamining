// _runtime/06479_ToString.js
import _mod1293 from "metro/01293__.js";
import _mod1294 from "metro/01294__.js";

let closure_2 = _mod1293("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1294("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
