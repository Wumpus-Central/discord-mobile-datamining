// === Module 1317: ? ===

// Module 1317
let apply = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;