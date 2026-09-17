// _runtime/04912_ToString.js
import _mod1281 from "metro/01281__.js";
import _mod1282 from "metro/01282__.js";

let closure_2 = _mod1281("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1282("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
