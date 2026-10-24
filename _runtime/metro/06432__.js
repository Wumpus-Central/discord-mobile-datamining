// _runtime/metro/06432__.js
import _mod1308 from "01308__.js";
import _mod6433 from "06433__.js";
import _mod6434 from "06434__.js";
import _mod6435 from "06435__.js";

if (_mod6433) {
  function setProto(arg0, arg1) {
    if (_mod6433(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1308("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6434;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6435) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6435(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
