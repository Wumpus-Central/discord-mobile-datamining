// === Module 14487: ? ===

// Module 14487
import withoutSetter from "withoutSetter" /* 14488 */;
import _mod14499 from "module_14499" /* 14499 */;
import _mod14501 from "module_14501" /* 14501 */;
import _mod14504 from "module_14504" /* 14504 */;
import _mod14507 from "module_14507" /* 14507 */;
import _mod14508 from "module_14508" /* 14508 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14499(arg0)) {
    if (!_mod14501(arg0)) {
      let str = arg1;
      const tmp4 = _mod14504(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14507(tmp4, arg0, str);
        if (_mod14499(tmp5)) {
          if (!_mod14501(tmp5)) {
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
        return _mod14508(arg0, str2);
      }
    }
  }
  return arg0;
};