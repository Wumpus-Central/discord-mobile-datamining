// === Module 14434: ? ===

// Module 14434
import withoutSetter from "withoutSetter" /* 14435 */;
import _mod14446 from "module_14446" /* 14446 */;
import _mod14448 from "module_14448" /* 14448 */;
import _mod14451 from "module_14451" /* 14451 */;
import _mod14454 from "module_14454" /* 14454 */;
import _mod14455 from "module_14455" /* 14455 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14446(arg0)) {
    if (!_mod14448(arg0)) {
      let str = arg1;
      const tmp4 = _mod14451(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14454(tmp4, arg0, str);
        if (_mod14446(tmp5)) {
          if (!_mod14448(tmp5)) {
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
        return _mod14455(arg0, str2);
      }
    }
  }
  return arg0;
};