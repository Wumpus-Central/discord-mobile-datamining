// _runtime/metro/06639__.js
import _mod1293 from "01293__.js";
import _mod6640 from "06640__.js";
import _mod6641 from "06641__.js";
import _mod6642 from "06642__.js";

if (_mod6640) {
  function setProto(arg0, arg1) {
    if (_mod6640(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6641;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6642) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6642(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
