// _runtime/metro/06642__.js
import _mod1293 from "01293__.js";
import _mod6643 from "06643__.js";
import _mod6644 from "06644__.js";
import _mod6645 from "06645__.js";

if (_mod6643) {
  function setProto(arg0, arg1) {
    if (_mod6643(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6644;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6645) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6645(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
