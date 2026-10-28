// === Module 5798: ? ===

// Module 5798
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5799 */;
import _mod5800 from "module_5800" /* 5800 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5800(arg0));
    }
    return {};
  }
};