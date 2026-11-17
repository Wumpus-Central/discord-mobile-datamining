// === Module 6116: ? ===

// Module 6116
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 6117 */;
import _mod6118 from "module_6118" /* 6118 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6118(arg0));
    }
    return {};
  }
};