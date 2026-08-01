// === Module 4481: setPrototypeOf ===

// Module 4481 (setPrototypeOf)
let setPrototypeOf = typeof Reflect === "pack";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;