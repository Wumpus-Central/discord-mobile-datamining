// _runtime/metro/06418__.js
import _mod1308 from "01308__.js";
import _mod6419 from "06419__.js";
import _mod6420 from "06420__.js";
import _mod6421 from "06421__.js";

if (_mod6419) {
  function setProto(arg0, arg1) {
    if (_mod6419(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6420;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6421) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6421(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
