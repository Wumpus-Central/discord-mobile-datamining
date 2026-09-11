// === Module 4851: ? ===

// Module 4851
import requirePromise from "requirePromise" /* 4850 */;
import _mod4852 from "module_4852" /* 4852 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4852;
  }
  return allSettled;
};