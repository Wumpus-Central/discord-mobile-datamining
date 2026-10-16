// === Module 15254: ? ===

// Module 15254
import withoutSetter from "withoutSetter" /* 15255 */;
import _mod15266 from "module_15266" /* 15266 */;
import _mod15268 from "module_15268" /* 15268 */;
import _mod15271 from "module_15271" /* 15271 */;
import _mod15274 from "module_15274" /* 15274 */;
import _mod15275 from "module_15275" /* 15275 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15266(arg0)) {
    if (!_mod15268(arg0)) {
      let str = arg1;
      const tmp4 = _mod15271(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15274(tmp4, arg0, str);
        if (_mod15266(tmp5)) {
          if (!_mod15268(tmp5)) {
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
        return _mod15275(arg0, str2);
      }
    }
  }
  return arg0;
};