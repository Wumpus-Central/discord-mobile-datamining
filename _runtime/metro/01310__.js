// _runtime/metro/01310__.js
import _mod1311 from "01311__.js";
import _mod1312 from "01312__.js";
import _mod1314 from "01314__.js";

if (_mod1311) {
  function getProto(arg0) {
    return _mod1311(arg0);
  }
} else if (_mod1312) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1312(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1314) {
    getProto = function getProto(arg0) {
      return _mod1314(arg0);
    };
  }
}

export default getProto;
