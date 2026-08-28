// _runtime/04585_valueOf.js
import _mod608 from "metro/00608__.js";

let prototype;
if (_mod608) {
  prototype = _mod608.prototype;
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
};