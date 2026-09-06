// === Module 548: castFunction ===

// Module 548 (castFunction)
import identity from "identity" /* 549 */;


export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
};