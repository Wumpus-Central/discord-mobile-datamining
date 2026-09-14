// _runtime/metro/01286__.js
import _mod1287 from "01287__.js";
import _mod1288 from "01288__.js";
import _mod1290 from "01290__.js";

if (_mod1287) {
  function getProto(arg0) {
    return _mod1287(arg0);
  }
} else if (_mod1288) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1288(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1290) {
    getProto = function getProto(arg0) {
      return _mod1290(arg0);
    };
  }
}

export default getProto;
