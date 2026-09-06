// === Module 14310: ? ===

// Module 14310
import withoutSetter from "withoutSetter" /* 14311 */;
import _mod14322 from "module_14322" /* 14322 */;
import _mod14324 from "module_14324" /* 14324 */;
import _mod14327 from "module_14327" /* 14327 */;
import _mod14330 from "module_14330" /* 14330 */;
import _mod14331 from "module_14331" /* 14331 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14322(arg0)) {
    if (!_mod14324(arg0)) {
      let str = arg1;
      const tmp4 = _mod14327(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14330(tmp4, arg0, str);
        if (_mod14322(tmp5)) {
          if (!_mod14324(tmp5)) {
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
        return _mod14331(arg0, str2);
      }
    }
  }
  return arg0;
};