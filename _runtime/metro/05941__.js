// === Module 5941: ? ===

// Module 5941
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5942 */;
import _mod5943 from "module_5943" /* 5943 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5943(arg0));
    }
    return {};
  }
};