// === Module 16396: ? ===

// Module 16396
import withoutSetter from "withoutSetter" /* 16397 */;
import _mod16408 from "module_16408" /* 16408 */;
import _mod16410 from "module_16410" /* 16410 */;
import _mod16413 from "module_16413" /* 16413 */;
import _mod16416 from "module_16416" /* 16416 */;
import _mod16417 from "module_16417" /* 16417 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16408(arg0)) {
    if (!_mod16410(arg0)) {
      let str = arg1;
      const tmp4 = _mod16413(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16416(tmp4, arg0, str);
        if (_mod16408(tmp5)) {
          if (!_mod16410(tmp5)) {
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
        return _mod16417(arg0, str2);
      }
    }
  }
  return arg0;
};