// === Module 14529: ? ===

// Module 14529
import withoutSetter from "withoutSetter" /* 14530 */;
import _mod14541 from "module_14541" /* 14541 */;
import _mod14543 from "module_14543" /* 14543 */;
import _mod14546 from "module_14546" /* 14546 */;
import _mod14549 from "module_14549" /* 14549 */;
import _mod14550 from "module_14550" /* 14550 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14541(arg0)) {
    if (!_mod14543(arg0)) {
      let str = arg1;
      const tmp4 = _mod14546(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14549(tmp4, arg0, str);
        if (_mod14541(tmp5)) {
          if (!_mod14543(tmp5)) {
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
        return _mod14550(arg0, str2);
      }
    }
  }
  return arg0;
};