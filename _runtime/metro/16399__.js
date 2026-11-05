// === Module 16399: ? ===

// Module 16399
import withoutSetter from "withoutSetter" /* 16400 */;
import _mod16411 from "module_16411" /* 16411 */;
import _mod16413 from "module_16413" /* 16413 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16419 from "module_16419" /* 16419 */;
import _mod16420 from "module_16420" /* 16420 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16411(arg0)) {
    if (!_mod16413(arg0)) {
      let str = arg1;
      const tmp4 = _mod16416(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16419(tmp4, arg0, str);
        if (_mod16411(tmp5)) {
          if (!_mod16413(tmp5)) {
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
        return _mod16420(arg0, str2);
      }
    }
  }
  return arg0;
};