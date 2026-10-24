// === Module 15553: ? ===

// Module 15553
import withoutSetter from "withoutSetter" /* 15554 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15567 from "module_15567" /* 15567 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15573 from "module_15573" /* 15573 */;
import _mod15574 from "module_15574" /* 15574 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15565(arg0)) {
    if (!_mod15567(arg0)) {
      let str = arg1;
      const tmp4 = _mod15570(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15573(tmp4, arg0, str);
        if (_mod15565(tmp5)) {
          if (!_mod15567(tmp5)) {
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
        return _mod15574(arg0, str2);
      }
    }
  }
  return arg0;
};