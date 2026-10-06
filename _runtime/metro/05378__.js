// _runtime/metro/05378__.js
import _mod1293 from "01293__.js";
import _mod5379 from "05379__.js";
import _mod5380 from "05380__.js";
import _mod5381 from "05381__.js";

let setProto;
if (_mod5379) {
  setProto = function setProto(arg0, arg1) {
    if (_mod5379(arg0, arg1)) {
      return arg0;
    } else {
      const self = this;
      const self2 = this;
      const tmp3 = new _mod1293("Reflect.setPrototypeOf: failed to set [[Prototype]]");
      throw tmp3;
    }
  };
} else {
  setProto = _mod5380;
  if (!setProto) {
    let setProto2 = null;
    if (_mod5381) {
      setProto2 = function setProto(arg0, arg1) {
        _mod5381(arg0, arg1);
        return arg0;
      };
    }
    setProto = setProto2;
  }
}

export default setProto;
