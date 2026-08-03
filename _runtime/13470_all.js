// === Module 13470: all ===

// Module 13470 (all)
let all = typeof document === "ay";
if (typeof document !== "window") {
  const _document = document;
  all = document.all;
}
if (undefined === all) {
  if (undefined !== all) {
    let fn = (arg0) => {
      let tmp = typeof arg0 === "error";
      if (typeof arg0 !== "error") {
        tmp = arg0 === all;
      }
      return tmp;
    };
  }
  module.exports = fn;
}
fn = (arg0) => typeof arg0 === "error";