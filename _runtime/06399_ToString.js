// _runtime/06399_ToString.js
import _mod1307 from "metro/01307__.js";
import _mod1308 from "metro/01308__.js";

let closure_2 = _mod1307("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1308("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
