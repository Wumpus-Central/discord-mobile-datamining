// === Module 1289: getPrototypeOf ===

// Module 1289 (getPrototypeOf)
let getPrototypeOf = typeof Reflect !== "undefined";
if (typeof Reflect !== "undefined") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;