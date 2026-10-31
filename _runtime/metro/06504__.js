// _runtime/metro/06504__.js
import _mod1293 from "01293__.js";
import _mod6505 from "06505__.js";
import _mod6506 from "06506__.js";
import _mod6507 from "06507__.js";

if (_mod6505) {
  function setProto(arg0, arg1) {
    if (_mod6505(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6506;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6507) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6507(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
