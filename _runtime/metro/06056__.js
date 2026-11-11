// === Module 6056: ? ===

// Module 6056
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 6057 */;
import _mod6058 from "module_6058" /* 6058 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6058(arg0));
    }
    return {};
  }
};