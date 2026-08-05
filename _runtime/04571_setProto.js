// _runtime/04571_setProto.js
import { setPrototypeOf } from "04572_setPrototypeOf.js";
import { 04574__ } from "metro/04574__.js";
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf /* setPrototypeOf */(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4573");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4574")) {
      setProto2 = function setProto(arg0, arg1) {
        04574__(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;