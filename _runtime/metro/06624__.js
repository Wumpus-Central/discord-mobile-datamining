// _runtime/metro/06624__.js
import _mod1293 from "01293__.js";
import _mod6625 from "06625__.js";
import _mod6626 from "06626__.js";
import _mod6627 from "06627__.js";

if (_mod6625) {
  function setProto(arg0, arg1) {
    if (_mod6625(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6626;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6627) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6627(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
