// _runtime/metro/05325__.js
import _mod1282 from "01282__.js";
import _mod5326 from "05326__.js";
import _mod5327 from "05327__.js";
import _mod5328 from "05328__.js";

if (_mod5326) {
  function setProto(arg0, arg1) {
    if (_mod5326(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1282("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5327;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5328) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5328(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
