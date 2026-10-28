// _runtime/metro/06467__.js
import _mod1305 from "01305__.js";
import _mod6468 from "06468__.js";
import _mod6469 from "06469__.js";
import _mod6470 from "06470__.js";

if (_mod6468) {
  function setProto(arg0, arg1) {
    if (_mod6468(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6469;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6470) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6470(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
