// === Module 5219: ? ===

// Module 5219
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5220 */;
import _mod5221 from "module_5221" /* 5221 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5221(arg0));
    }
    return {};
  }
};