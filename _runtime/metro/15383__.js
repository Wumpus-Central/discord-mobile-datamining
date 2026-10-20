// === Module 15383: ? ===

// Module 15383
import withoutSetter from "withoutSetter" /* 15384 */;
import _mod15395 from "module_15395" /* 15395 */;
import _mod15397 from "module_15397" /* 15397 */;
import _mod15400 from "module_15400" /* 15400 */;
import _mod15403 from "module_15403" /* 15403 */;
import _mod15404 from "module_15404" /* 15404 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15395(arg0)) {
    if (!_mod15397(arg0)) {
      let str = arg1;
      const tmp4 = _mod15400(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15403(tmp4, arg0, str);
        if (_mod15395(tmp5)) {
          if (!_mod15397(tmp5)) {
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
        return _mod15404(arg0, str2);
      }
    }
  }
  return arg0;
};