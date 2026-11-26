// _runtime/metro/01301__.js
import _mod1302 from "01302__.js";
import _mod1303 from "01303__.js";
import _mod1305 from "01305__.js";

if (_mod1302) {
  function getProto(arg0) {
    return _mod1302(arg0);
  }
} else if (_mod1303) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1303(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1305) {
    getProto = function getProto(arg0) {
      return _mod1305(arg0);
    };
  }
}

export default getProto;
