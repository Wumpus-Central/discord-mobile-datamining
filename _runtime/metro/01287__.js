// _runtime/metro/01287__.js
import _mod1288 from "01288__.js";
import _mod1289 from "01289__.js";
import _mod1291 from "01291__.js";

if (_mod1288) {
  function getProto(arg0) {
    return _mod1288(arg0);
  }
} else if (_mod1289) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1289(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1291) {
    getProto = function getProto(arg0) {
      return _mod1291(arg0);
    };
  }
}

export default getProto;
