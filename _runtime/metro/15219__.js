// === Module 15219: ? ===

// Module 15219
import withoutSetter from "withoutSetter" /* 15220 */;
import _mod15231 from "module_15231" /* 15231 */;
import _mod15233 from "module_15233" /* 15233 */;
import _mod15236 from "module_15236" /* 15236 */;
import _mod15239 from "module_15239" /* 15239 */;
import _mod15240 from "module_15240" /* 15240 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15231(arg0)) {
    if (!_mod15233(arg0)) {
      let str = arg1;
      const tmp4 = _mod15236(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15239(tmp4, arg0, str);
        if (_mod15231(tmp5)) {
          if (!_mod15233(tmp5)) {
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
        return _mod15240(arg0, str2);
      }
    }
  }
  return arg0;
};