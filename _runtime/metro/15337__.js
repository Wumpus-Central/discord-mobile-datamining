// === Module 15337: ? ===

// Module 15337
import withoutSetter from "withoutSetter" /* 15338 */;
import _mod15349 from "module_15349" /* 15349 */;
import _mod15351 from "module_15351" /* 15351 */;
import _mod15354 from "module_15354" /* 15354 */;
import _mod15357 from "module_15357" /* 15357 */;
import _mod15358 from "module_15358" /* 15358 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15349(arg0)) {
    if (!_mod15351(arg0)) {
      let str = arg1;
      const tmp4 = _mod15354(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15357(tmp4, arg0, str);
        if (_mod15349(tmp5)) {
          if (!_mod15351(tmp5)) {
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
        return _mod15358(arg0, str2);
      }
    }
  }
  return arg0;
};