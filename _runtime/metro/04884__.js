// === Module 4884: ? ===

// Module 4884
import requirePromise from "requirePromise" /* 4883 */;
import _mod4885 from "module_4885" /* 4885 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4885;
  }
  return allSettled;
};