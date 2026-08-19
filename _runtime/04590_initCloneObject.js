// === Module 4590: initCloneObject ===

// Module 4590 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4591)(tmp3(4592)(arg0));
      const tmp = tmp3(4591);
    }
    return {};
  }
};