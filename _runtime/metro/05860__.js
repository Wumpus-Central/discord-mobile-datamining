// === Module 5860: ? ===

// Module 5860
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5861 */;
import _mod5862 from "module_5862" /* 5862 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5862(arg0));
    }
    return {};
  }
};