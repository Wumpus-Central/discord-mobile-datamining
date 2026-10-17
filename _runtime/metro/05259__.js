// === Module 5259: ? ===

// Module 5259
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5260 */;
import _mod5261 from "module_5261" /* 5261 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5261(arg0));
    }
    return {};
  }
};