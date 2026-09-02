// _runtime/04619_valueOf.js
import _mod605 from "metro/00605__.js";

let prototype;
if (_mod605) {
  prototype = _mod605.prototype;
}
let valueOf;
if (prototype) {
  valueOf = prototype.valueOf;
}

export default function cloneSymbol(arg0) {
  if (valueOf) {
    const call = tmp.call;
    Object(typeof call === "unknown" ? tmp() : call(arg0));
  } else {
    return {};
  }
}
