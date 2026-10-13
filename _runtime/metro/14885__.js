// === Module 14885: ? ===

// Module 14885
import withoutSetter from "withoutSetter" /* 14886 */;
import _mod14897 from "module_14897" /* 14897 */;
import _mod14899 from "module_14899" /* 14899 */;
import _mod14902 from "module_14902" /* 14902 */;
import _mod14905 from "module_14905" /* 14905 */;
import _mod14906 from "module_14906" /* 14906 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14897(arg0)) {
    if (!_mod14899(arg0)) {
      let str = arg1;
      const tmp4 = _mod14902(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14905(tmp4, arg0, str);
        if (_mod14897(tmp5)) {
          if (!_mod14899(tmp5)) {
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
        return _mod14906(arg0, str2);
      }
    }
  }
  return arg0;
};