// === Module 4881: ? ===

// Module 4881
import requirePromise from "requirePromise" /* 4880 */;
import _mod4882 from "module_4882" /* 4882 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4882;
  }
  return allSettled;
};