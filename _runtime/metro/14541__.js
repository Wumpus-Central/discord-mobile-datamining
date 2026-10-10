// === Module 14541: ? ===

// Module 14541
import withoutSetter from "withoutSetter" /* 14542 */;
import _mod14553 from "module_14553" /* 14553 */;
import _mod14555 from "module_14555" /* 14555 */;
import _mod14558 from "module_14558" /* 14558 */;
import _mod14561 from "module_14561" /* 14561 */;
import _mod14562 from "module_14562" /* 14562 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14553(arg0)) {
    if (!_mod14555(arg0)) {
      let str = arg1;
      const tmp4 = _mod14558(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14561(tmp4, arg0, str);
        if (_mod14553(tmp5)) {
          if (!_mod14555(tmp5)) {
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
        return _mod14562(arg0, str2);
      }
    }
  }
  return arg0;
};