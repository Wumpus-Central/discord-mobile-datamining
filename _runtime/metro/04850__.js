// === Module 4850: ? ===

// Module 4850
import requirePromise from "requirePromise" /* 4849 */;
import _mod4851 from "module_4851" /* 4851 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4851;
  }
  return allSettled;
};