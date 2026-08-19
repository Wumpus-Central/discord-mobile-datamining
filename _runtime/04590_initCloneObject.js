// _runtime/04590_initCloneObject.js
import isPrototype from "00630_isPrototype.js";
import object from "04591_object.js";
import overArg from "04592_overArg.js";


export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      object(overArg(arg0));
    }
    return {};
  }
};