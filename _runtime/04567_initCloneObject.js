// _runtime/04567_initCloneObject.js
import isPrototype from "00630_isPrototype.js";


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      tmp3(4568)(tmp3(4569)(arg0));
      const tmp = tmp3(4568);
    }
    return {};
  }
};