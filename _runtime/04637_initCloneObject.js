// _runtime/04637_initCloneObject.js
import isPrototype from "00545_isPrototype.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4638)(tmp3(4639)(arg0));
      const tmp = tmp3(4638);
    }
    return {};
  }
}
