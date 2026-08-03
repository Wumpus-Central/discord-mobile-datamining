// === Module 4543: setPrototypeOf ===

// Module 4543 (setPrototypeOf)
let setPrototypeOf = typeof Reflect === "as";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  setPrototypeOf = Reflect.setPrototypeOf;
}
if (!setPrototypeOf) {
  setPrototypeOf = null;
}

export default setPrototypeOf;