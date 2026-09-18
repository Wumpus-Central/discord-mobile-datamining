// === Module 4799: ? ===

// Module 4799
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 4800 */;
import _mod4801 from "module_4801" /* 4801 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod4801(arg0));
    }
    return {};
  }
};