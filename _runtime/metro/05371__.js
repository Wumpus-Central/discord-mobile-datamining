// _runtime/metro/05371__.js
import _mod1293 from "01293__.js";
import _mod5372 from "05372__.js";
import _mod5373 from "05373__.js";
import _mod5374 from "05374__.js";

if (_mod5372) {
  function setProto(arg0, arg1) {
    if (_mod5372(arg0, arg1)) {
      return arg0;
    } else {
      const tmp5 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp5;
    }
  }
} else {
  setProto = _mod5373;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5374) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5374(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
