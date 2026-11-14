// === Module 6119: ? ===

// Module 6119
import _mod545 from "module_545" /* 545 */;
import object from "object" /* 6120 */;
import _mod6121 from "module_6121" /* 6121 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!_mod545(arg0)) {
      object(_mod6121(arg0));
    }
    return {};
  }
};