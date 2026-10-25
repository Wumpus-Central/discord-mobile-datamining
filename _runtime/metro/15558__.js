// === Module 15558: ? ===

// Module 15558
import withoutSetter from "withoutSetter" /* 15559 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15572 from "module_15572" /* 15572 */;
import _mod15575 from "module_15575" /* 15575 */;
import _mod15578 from "module_15578" /* 15578 */;
import _mod15579 from "module_15579" /* 15579 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15570(arg0)) {
    if (!_mod15572(arg0)) {
      let str = arg1;
      const tmp4 = _mod15575(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15578(tmp4, arg0, str);
        if (_mod15570(tmp5)) {
          if (!_mod15572(tmp5)) {
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
        return _mod15579(arg0, str2);
      }
    }
  }
  return arg0;
};