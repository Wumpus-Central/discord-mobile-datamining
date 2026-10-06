// _runtime/04974_initCloneObject.js
import isPrototype from "00545_isPrototype.js";
import isObject from "04975_isObject.js";
import overArg from "04976_overArg.js";

export default function initCloneObject(arg0) {
  if (typeof arg0.constructor === "function") {
    if (!isPrototype(arg0)) {
      const tmp = isObject;
      tmp(overArg(arg0));
    }
    return {};
  }
}
