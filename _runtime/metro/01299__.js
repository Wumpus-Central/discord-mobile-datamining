// _runtime/metro/01299__.js
import _mod1300 from "01300__.js";
import _mod1301 from "01301__.js";
import _mod1303 from "01303__.js";

if (_mod1300) {
  function getProto(arg0) {
    return _mod1300(arg0);
  }
} else if (_mod1301) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1301(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1303) {
    getProto = function getProto(arg0) {
      return _mod1303(arg0);
    };
  }
}

export default getProto;
