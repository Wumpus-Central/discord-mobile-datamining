// === Module 547: getPrototypeOf ===

// Module 547 (getPrototypeOf)
let getPrototypeOf = typeof Reflect === "pack";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;