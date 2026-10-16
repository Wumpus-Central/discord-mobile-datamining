// === Module 5221: ? ===

// Module 5221
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 5222 */;
import _mod5223 from "module_5223" /* 5223 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod5223(arg0));
    }
    return {};
  }
};