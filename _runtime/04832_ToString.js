// _runtime/04832_ToString.js
import _mod1282 from "metro/01282__.js";
import _mod1283 from "metro/01283__.js";

let closure_2 = _mod1282("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new _mod1283("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return closure_2(arg0);
  }
}
