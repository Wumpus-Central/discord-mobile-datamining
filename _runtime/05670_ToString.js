// _runtime/05670_ToString.js
import _mod1304 from "metro/01304__.js";
import _mod1305 from "metro/01305__.js";

let closure_2 = _mod1304("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1305("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
