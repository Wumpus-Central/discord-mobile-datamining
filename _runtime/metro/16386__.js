// === Module 16386: ? ===

// Module 16386
import withoutSetter from "withoutSetter" /* 16387 */;
import _mod16398 from "module_16398" /* 16398 */;
import _mod16400 from "module_16400" /* 16400 */;
import _mod16403 from "module_16403" /* 16403 */;
import _mod16406 from "module_16406" /* 16406 */;
import _mod16407 from "module_16407" /* 16407 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16398(arg0)) {
    if (!_mod16400(arg0)) {
      let str = arg1;
      const tmp4 = _mod16403(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16406(tmp4, arg0, str);
        if (_mod16398(tmp5)) {
          if (!_mod16400(tmp5)) {
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
        return _mod16407(arg0, str2);
      }
    }
  }
  return arg0;
};