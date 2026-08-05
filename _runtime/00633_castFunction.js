// _runtime/00633_castFunction.js
import { identity } from "00634_identity.js";

export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity /* identity */;
  }
  return tmp;
};