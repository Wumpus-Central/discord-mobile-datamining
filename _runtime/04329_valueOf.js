// === Module 4329: valueOf ===

// Module 4329 (valueOf)
let prototype;
if (require("module_608")) {
  prototype = require("module_608").prototype;
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