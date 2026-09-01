// _runtime/00546_getProto.js
import getPrototypeOf from "00547_getPrototypeOf.js";
import _mod548 from "metro/00548__.js";
import _mod550 from "metro/00550__.js";

if (getPrototypeOf) {
  function getProto(arg0) {
    return getPrototypeOf(arg0);
  }
} else if (_mod548) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod548(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod550) {
    getProto = function getProto(arg0) {
      return _mod550(arg0);
    };
  }
}

export default getProto;
