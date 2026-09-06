// _runtime/01288_getProto.js
import getPrototypeOf from "01289_getPrototypeOf.js";
import _mod1290 from "metro/01290__.js";
import _mod1292 from "metro/01292__.js";

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod1290) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1290(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1292) {
    getProto = function getProto(arg0) {
      return _mod1292(arg0);
    };
  }
}

export default getProto;
