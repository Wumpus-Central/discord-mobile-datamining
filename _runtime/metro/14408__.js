// === Module 14408: ? ===

// Module 14408
import withoutSetter from "withoutSetter" /* 14409 */;
import _mod14420 from "module_14420" /* 14420 */;
import _mod14422 from "module_14422" /* 14422 */;
import _mod14425 from "module_14425" /* 14425 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14429 from "module_14429" /* 14429 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14420(arg0)) {
    if (!_mod14422(arg0)) {
      let str = arg1;
      const tmp4 = _mod14425(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14428(tmp4, arg0, str);
        if (_mod14420(tmp5)) {
          if (!_mod14422(tmp5)) {
            const tmp9 = new TypeError("Can't convert object to primitive value");
            throw tmp9;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod14429(arg0, str2);
      }
    }
  }
  return arg0;
};