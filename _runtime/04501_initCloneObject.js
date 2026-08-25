// === Module 4501: initCloneObject ===

// Module 4501 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4502)(tmp3(4503)(arg0));
      const tmp = tmp3(4502);
    }
    return {};
  }
};