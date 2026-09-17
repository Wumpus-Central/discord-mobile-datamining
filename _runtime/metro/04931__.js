// _runtime/metro/04931__.js
import _mod1282 from "01282__.js";
import _mod4932 from "04932__.js";
import _mod4933 from "04933__.js";
import _mod4934 from "04934__.js";

if (_mod4932) {
  function setProto(arg0, arg1) {
    if (_mod4932(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod4933;
  if (!setProto) {
    let setProto2 = null;
    if (_mod4934) {
      setProto2 = function setProto(arg0, arg1) {
        _mod4934(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
