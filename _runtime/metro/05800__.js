// === Module 5800: ? ===

// Module 5800
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5801 */;
import _mod5802 from "module_5802" /* 5802 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5802(arg0));
    }
    return {};
  }
};