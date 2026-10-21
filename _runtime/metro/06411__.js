// _runtime/metro/06411__.js
import _mod1308 from "01308__.js";
import _mod6412 from "06412__.js";
import _mod6413 from "06413__.js";
import _mod6414 from "06414__.js";

if (_mod6412) {
  function setProto(arg0, arg1) {
    if (_mod6412(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6413;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6414) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6414(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
