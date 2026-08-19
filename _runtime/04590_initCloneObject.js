// === Module 4590: initCloneObject ===

// Module 4590 (initCloneObject)
import isPrototype from "isPrototype" /* 630 */;
import object from "object" /* 4591 */;
import overArg from "overArg" /* 4592 */;


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      object(overArg(arg0));
    }
    return {};
  }
};