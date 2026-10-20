// === Module 6343: ? ===

// Module 6343
import requirePromise from "requirePromise" /* 6342 */;
import _mod6344 from "module_6344" /* 6344 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod6344;
  }
  return allSettled;
};