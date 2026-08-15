// _runtime/04433_setProto.js
import { setPrototypeOf } from "04434_setPrototypeOf.js";
import { 04436__ } from "metro/04436__.js";
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
  setProto = require("module_4435");
  if (!setProto) {
    let setProto2 = null;
    if (require("module_4436")) {
      setProto2 = function setProto(arg0, arg1) {
        04436__(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;