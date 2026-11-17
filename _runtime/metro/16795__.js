// === Module 16795: ? ===

// Module 16795
import withoutSetter from "withoutSetter" /* 16796 */;
import _mod16807 from "module_16807" /* 16807 */;
import _mod16809 from "module_16809" /* 16809 */;
import _mod16812 from "module_16812" /* 16812 */;
import _mod16815 from "module_16815" /* 16815 */;
import _mod16816 from "module_16816" /* 16816 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16807(arg0)) {
    if (!_mod16809(arg0)) {
      let str = arg1;
      const tmp4 = _mod16812(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16815(tmp4, arg0, str);
        if (_mod16807(tmp5)) {
          if (!_mod16809(tmp5)) {
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
        return _mod16816(arg0, str2);
      }
    }
  }
  return arg0;
};