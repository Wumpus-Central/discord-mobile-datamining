// === Module 4567: initCloneObject ===

// Module 4567 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4568)(tmp3(4569)(arg0));
      const tmp = tmp3(4568);
    }
    return {};
  }
};