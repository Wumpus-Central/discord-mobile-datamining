// === Module 15594: ? ===

// Module 15594
import withoutSetter from "withoutSetter" /* 15595 */;
import _mod15606 from "module_15606" /* 15606 */;
import _mod15608 from "module_15608" /* 15608 */;
import _mod15611 from "module_15611" /* 15611 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15615 from "module_15615" /* 15615 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15606(arg0)) {
    if (!_mod15608(arg0)) {
      let str = arg1;
      const tmp4 = _mod15611(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15614(tmp4, arg0, str);
        if (_mod15606(tmp5)) {
          if (!_mod15608(tmp5)) {
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
        return _mod15615(arg0, str2);
      }
    }
  }
  return arg0;
};