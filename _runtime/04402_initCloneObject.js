import { isPrototype } from "00630_isPrototype.js";
// _runtime/04402_initCloneObject.js

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype /* isPrototype */(arg0)) {
      tmp3(4403)(tmp3(4404)(arg0));
      const tmp = tmp3(4403);
    }
    return {};
  }
};