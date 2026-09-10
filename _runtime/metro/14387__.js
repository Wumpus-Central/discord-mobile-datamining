// === Module 14387: ? ===

// Module 14387
import withoutSetter from "withoutSetter" /* 14388 */;
import _mod14399 from "module_14399" /* 14399 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14407 from "module_14407" /* 14407 */;
import _mod14408 from "module_14408" /* 14408 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14399(arg0)) {
    if (!_mod14401(arg0)) {
      let str = arg1;
      const tmp4 = _mod14404(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14407(tmp4, arg0, str);
        if (_mod14399(tmp5)) {
          if (!_mod14401(tmp5)) {
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
        return _mod14408(arg0, str2);
      }
    }
  }
  return arg0;
};