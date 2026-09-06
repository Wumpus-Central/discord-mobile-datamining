// _runtime/00548_castFunction.js
import identity from "00549_identity.js";

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
}
