// === Module 5680: ? ===

// Module 5680
import _mod1337 from "module_1337" /* 1337 */;


export default function isFinite(num) {
  let tmp = typeof num === "number";
  if (typeof num !== "number") {
    tmp = typeof num === "bigint";
  }
  if (tmp) {
    tmp = !_mod1337(num);
  }
  if (tmp) {
    tmp = num !== Infinity;
  }
  if (tmp) {
    tmp = num !== -Infinity;
  }
  return tmp;
};