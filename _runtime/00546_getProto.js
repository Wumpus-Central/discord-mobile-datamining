// _runtime/00546_getProto.js
import { getPrototypeOf } from "00547_getPrototypeOf.js";
import { 00548__ } from "metro/00548__.js";
import { 00550__ } from "metro/00550__.js";
if (require("getPrototypeOf")) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (require("module_548")) {
  getProto = function getProto(obj) {
    if (obj) {
      return 00548__(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (require("module_550")) {
    getProto = function getProto(arg0) {
      return 00550__(arg0);
    };
  }
}

export default getProto;