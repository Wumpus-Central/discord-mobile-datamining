// === Module 15365: ? ===

// Module 15365
import withoutSetter from "withoutSetter" /* 15366 */;
import _mod15377 from "module_15377" /* 15377 */;
import _mod15379 from "module_15379" /* 15379 */;
import _mod15382 from "module_15382" /* 15382 */;
import _mod15385 from "module_15385" /* 15385 */;
import _mod15386 from "module_15386" /* 15386 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15377(arg0)) {
    if (!_mod15379(arg0)) {
      let str = arg1;
      const tmp4 = _mod15382(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15385(tmp4, arg0, str);
        if (_mod15377(tmp5)) {
          if (!_mod15379(tmp5)) {
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
        return _mod15386(arg0, str2);
      }
    }
  }
  return arg0;
};