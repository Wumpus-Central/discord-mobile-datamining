// === Module 610: ? ===

// Module 610
let tmp = typeof global === "object";
if (typeof global === "object") {
  tmp = global;
}
if (tmp) {
  const _Object = Object;
  tmp = global.Object === Object;
}
if (tmp) {
  tmp = global;
}

export default tmp;