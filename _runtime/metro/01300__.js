// _runtime/metro/01300__.js
import _mod1301 from "01301__.js";
import _mod1302 from "01302__.js";
import _mod1304 from "01304__.js";

if (_mod1301) {
  function getProto(arg0) {
    return _mod1301(arg0);
  }
} else if (_mod1302) {
  getProto = function getProto(obj) {
    if (obj) {
      return _mod1302(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1304) {
    getProto = function getProto(arg0) {
      return _mod1304(arg0);
    };
  }
}

export default getProto;
