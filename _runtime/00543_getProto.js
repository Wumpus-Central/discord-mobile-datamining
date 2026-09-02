// _runtime/00543_getProto.js
import getPrototypeOf from "00544_getPrototypeOf.js";
import _mod545 from "metro/00545__.js";
import _mod547 from "metro/00547__.js";

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod545) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod545(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod547) {
    getProto = function getProto(arg0) {
      return _mod547(arg0);
    };
  }
}

export default getProto;
