// === Module 16284: ? ===

// Module 16284
import withoutSetter from "withoutSetter" /* 16285 */;
import _mod16296 from "module_16296" /* 16296 */;
import _mod16298 from "module_16298" /* 16298 */;
import _mod16301 from "module_16301" /* 16301 */;
import _mod16304 from "module_16304" /* 16304 */;
import _mod16305 from "module_16305" /* 16305 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16296(arg0)) {
    if (!_mod16298(arg0)) {
      let str = arg1;
      const tmp4 = _mod16301(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16304(tmp4, arg0, str);
        if (_mod16296(tmp5)) {
          if (!_mod16298(tmp5)) {
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
        return _mod16305(arg0, str2);
      }
    }
  }
  return arg0;
};