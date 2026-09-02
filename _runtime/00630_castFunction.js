// _runtime/00630_castFunction.js
import identity from "00631_identity.js";

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
}
