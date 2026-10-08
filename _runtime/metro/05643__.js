// === Module 5643: ? ===

// Module 5643
import requirePromise from "requirePromise" /* 5642 */;
import _mod5644 from "module_5644" /* 5644 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod5644;
  }
  return allSettled;
};