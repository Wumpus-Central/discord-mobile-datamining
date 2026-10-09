// _runtime/metro/01311__.js
import _mod1312 from "01312__.js";
import _mod1313 from "01313__.js";
import _mod1315 from "01315__.js";

if (_mod1312) {
  function getProto(arg0) {
    return _mod1312(arg0);
  }
} else if (_mod1313) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1313(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1315) {
    getProto = function getProto(arg0) {
      return _mod1315(arg0);
    };
  }
}

export default getProto;
