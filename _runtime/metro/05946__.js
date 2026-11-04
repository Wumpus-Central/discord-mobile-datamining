// === Module 5946: ? ===

// Module 5946
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5947 */;
import _mod5948 from "module_5948" /* 5948 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5948(arg0));
    }
    return {};
  }
};