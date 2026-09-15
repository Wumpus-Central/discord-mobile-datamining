// _runtime/metro/04930__.js
import _mod1282 from "01282__.js";
import _mod4931 from "04931__.js";
import _mod4932 from "04932__.js";
import _mod4933 from "04933__.js";

if (_mod4931) {
  function setProto(arg0, arg1) {
    if (_mod4931(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4932;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4933) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4933(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
