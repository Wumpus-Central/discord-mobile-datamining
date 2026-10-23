// _runtime/metro/06430__.js
import _mod1308 from "01308__.js";
import _mod6431 from "06431__.js";
import _mod6432 from "06432__.js";
import _mod6433 from "06433__.js";

if (_mod6431) {
  function setProto(arg0, arg1) {
    if (_mod6431(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6432;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6433) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6433(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
