// _runtime/metro/06389__.js
import _mod1308 from "01308__.js";
import _mod6390 from "06390__.js";
import _mod6391 from "06391__.js";
import _mod6392 from "06392__.js";

if (_mod6390) {
  function setProto(arg0, arg1) {
    if (_mod6390(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6391;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6392) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6392(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
