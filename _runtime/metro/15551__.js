// === Module 15551: ? ===

// Module 15551
import withoutSetter from "withoutSetter" /* 15552 */;
import _mod15563 from "module_15563" /* 15563 */;
import _mod15565 from "module_15565" /* 15565 */;
import _mod15568 from "module_15568" /* 15568 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15572 from "module_15572" /* 15572 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15563(arg0)) {
    if (!_mod15565(arg0)) {
      let str = arg1;
      const tmp4 = _mod15568(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15571(tmp4, arg0, str);
        if (_mod15563(tmp5)) {
          if (!_mod15565(tmp5)) {
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
        return _mod15572(arg0, str2);
      }
    }
  }
  return arg0;
};