// === Module 5325: ? ===

// Module 5325
import _mod1282 from "module_1282" /* 1282 */;
import _mod5326 from "module_5326" /* 5326 */;
import _mod5327 from "module_5327" /* 5327 */;
import _mod5328 from "module_5328" /* 5328 */;

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