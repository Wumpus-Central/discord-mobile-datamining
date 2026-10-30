// _runtime/metro/06498__.js
import _mod1294 from "01294__.js";
import _mod6499 from "06499__.js";
import _mod6500 from "06500__.js";
import _mod6501 from "06501__.js";

if (_mod6499) {
  function setProto(arg0, arg1) {
    if (_mod6499(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1294("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod6500;
  if (!setProto) {
    let setProto2 = null;
    if (_mod6501) {
      setProto2 = function setProto(arg0, arg1) {
        _mod6501(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
