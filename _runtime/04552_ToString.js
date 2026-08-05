// _runtime/04552_ToString.js
let closure_2 = require("getEvalledConstructor")("%String%");

export default function ToString(arg0) {
  if (typeof arg0 === "symbol") {
    const tmp5 = new require(541)("Cannot convert a Symbol value to a string");
    throw tmp5;
  } else {
    return callback(arg0);
  }
};