// === Module 15464: ? ===

// Module 15464
import withoutSetter from "withoutSetter" /* 15465 */;
import _mod15476 from "module_15476" /* 15476 */;
import _mod15478 from "module_15478" /* 15478 */;
import _mod15481 from "module_15481" /* 15481 */;
import _mod15484 from "module_15484" /* 15484 */;
import _mod15485 from "module_15485" /* 15485 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15476(arg0)) {
    if (!_mod15478(arg0)) {
      let str = arg1;
      const tmp4 = _mod15481(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15484(tmp4, arg0, str);
        if (_mod15476(tmp5)) {
          if (!_mod15478(tmp5)) {
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
        return _mod15485(arg0, str2);
      }
    }
  }
  return arg0;
};