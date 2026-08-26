// === Module 4565: initCloneObject ===

// Module 4565 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4566)(tmp3(4567)(arg0));
      const tmp = tmp3(4566);
    }
    return {};
  }
};