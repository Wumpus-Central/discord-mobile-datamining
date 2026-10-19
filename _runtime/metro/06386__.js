// _runtime/metro/06386__.js
import _mod1308 from "01308__.js";
import _mod6387 from "06387__.js";
import _mod6388 from "06388__.js";
import _mod6389 from "06389__.js";

if (_mod6387) {
  function setProto(arg0, arg1) {
    if (_mod6387(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6388;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6389) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6389(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
