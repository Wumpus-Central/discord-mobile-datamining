// _runtime/metro/01313__.js
import _mod1314 from "01314__.js";
import _mod1315 from "01315__.js";
import _mod1317 from "01317__.js";

if (_mod1314) {
  function getProto(arg0) {
    return _mod1314(arg0);
  }
} else if (_mod1315) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1315(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1317) {
    getProto = function getProto(arg0) {
      return _mod1317(arg0);
    };
  }
}

export default getProto;
