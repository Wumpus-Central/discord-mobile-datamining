// === Module 14400: ? ===

// Module 14400
let all = typeof document === "object";
if (typeof document === "object") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (fn) => {
      let tmp = typeof fn === "function";
      if (typeof fn !== "function") {
        tmp = fn === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (fn) => typeof fn === "function";