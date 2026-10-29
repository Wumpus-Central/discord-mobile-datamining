// _runtime/metro/06491__.js
import _mod1305 from "01305__.js";
import _mod6492 from "06492__.js";
import _mod6493 from "06493__.js";
import _mod6494 from "06494__.js";

if (_mod6492) {
  function setProto(arg0, arg1) {
    if (_mod6492(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1305("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6493;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6494) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6494(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
