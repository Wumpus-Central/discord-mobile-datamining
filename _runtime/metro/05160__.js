// === Module 5160: ? ===

// Module 5160
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5161 */;
import _mod5162 from "module_5162" /* 5162 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5162(arg0));
    }
    return {};
  }
};