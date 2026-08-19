// === Module 633: castFunction ===

// Module 633 (castFunction)
import identity from "identity" /* 634 */;


export default function castFunction(fn) {
  let tmp = fn;
  if (typeof fn !== "function") {
    tmp = identity;
  }
  return tmp;
};