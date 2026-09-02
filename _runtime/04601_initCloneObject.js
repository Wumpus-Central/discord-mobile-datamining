// === Module 4601: initCloneObject ===

// Module 4601 (initCloneObject)
import isPrototype from "isPrototype" /* 627 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4602)(tmp3(4603)(arg0));
      const tmp = tmp3(4602);
    }
    return {};
  }
};