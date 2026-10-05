// _runtime/metro/01298__.js
import _mod1299 from "01299__.js";
import _mod1300 from "01300__.js";
import _mod1302 from "01302__.js";

let getProto;
if (_mod1299) {
  getProto = function getProto(arg0) {
    return _mod1299(arg0);
  };
} else if (_mod1300) {
  getProto = function getProto(obj) {
    const tmp = obj;
    if (tmp) {
      return _mod1300(obj);
    }
    const typeError = new TypeError("getProto: not an object");
    throw typeError;
  };
} else {
  getProto = null;
  if (_mod1302) {
    getProto = function getProto(arg0) {
      return _mod1302(arg0);
    };
  }
}

export default getProto;
