// === Module 15264: ? ===

// Module 15264
import withoutSetter from "withoutSetter" /* 15265 */;
import _mod15276 from "module_15276" /* 15276 */;
import _mod15278 from "module_15278" /* 15278 */;
import _mod15281 from "module_15281" /* 15281 */;
import _mod15284 from "module_15284" /* 15284 */;
import _mod15285 from "module_15285" /* 15285 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15276(arg0)) {
    if (!_mod15278(arg0)) {
      let str = arg1;
      const tmp4 = _mod15281(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15284(tmp4, arg0, str);
        if (_mod15276(tmp5)) {
          if (!_mod15278(tmp5)) {
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
        return _mod15285(arg0, str2);
      }
    }
  }
  return arg0;
};