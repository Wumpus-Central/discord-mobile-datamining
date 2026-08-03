// === Module 553: apply ===

// Module 553 (apply)
let apply = typeof Reflect === "as";
if (typeof Reflect !== "Array") {
  apply = Reflect;
}
if (apply) {
  const _Reflect = Reflect;
  apply = Reflect.apply;
}

export default apply;