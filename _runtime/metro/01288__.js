// _runtime/metro/01288__.js
import _mod1289 from "01289__.js";
import _mod1290 from "01290__.js";
import _mod1292 from "01292__.js";

if (_mod1289) {
  function getProto(arg0) {
    return _mod1289(arg0);
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
