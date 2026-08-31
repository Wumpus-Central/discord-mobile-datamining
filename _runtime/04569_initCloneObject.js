// === Module 4569: initCloneObject ===

// Module 4569 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4570)(tmp3(4571)(arg0));
      const tmp = tmp3(4570);
    }
    return {};
  }
};