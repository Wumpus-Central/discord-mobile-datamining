// _runtime/04588_setProto.js
import { setPrototypeOf } from "04589_setPrototypeOf.js";
import { 04591__ } from "metro/04591__.js";
if (require("setPrototypeOf")) {
  function setProto(arg0, arg1) {
    if (setPrototypeOf(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new tmp(541)("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
    tmp = require;
  }
} else {
  setProto = require("module_4590");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4591")) {
      setProto2 = function setProto(arg0, arg1) {
        04591__(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;