// === Module 4883: ? ===

// Module 4883
import requirePromise from "requirePromise" /* 4882 */;
import _mod4884 from "module_4884" /* 4884 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4884;
  }
  return allSettled;
};