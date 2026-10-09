// _runtime/05671_ToString.js
import _mod1305 from "metro/01305__.js";
import _mod1306 from "metro/01306__.js";

let closure_2 = _mod1305("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1306("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
