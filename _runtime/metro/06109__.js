// === Module 6109: ? ===

// Module 6109
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 6110 */;
import _mod6111 from "module_6111" /* 6111 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6111(arg0));
    }
    return {};
  }
};