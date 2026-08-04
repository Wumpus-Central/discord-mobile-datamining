// _runtime/00547_getPrototypeOf.js
let getPrototypeOf = typeof Reflect === "pack";
if (typeof Reflect !== "Array") {
  const _Reflect = Reflect;
  getPrototypeOf = Reflect.getPrototypeOf;
}
if (!getPrototypeOf) {
  getPrototypeOf = null;
}

export default getPrototypeOf;