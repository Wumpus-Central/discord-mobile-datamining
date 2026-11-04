// === Module 16373: ? ===

// Module 16373
import withoutSetter from "withoutSetter" /* 16374 */;
import _mod16385 from "module_16385" /* 16385 */;
import _mod16387 from "module_16387" /* 16387 */;
import _mod16390 from "module_16390" /* 16390 */;
import _mod16393 from "module_16393" /* 16393 */;
import _mod16394 from "module_16394" /* 16394 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16385(arg0)) {
    if (!_mod16387(arg0)) {
      let str = arg1;
      const tmp4 = _mod16390(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16393(tmp4, arg0, str);
        if (_mod16385(tmp5)) {
          if (!_mod16387(tmp5)) {
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
        return _mod16394(arg0, str2);
      }
    }
  }
  return arg0;
};