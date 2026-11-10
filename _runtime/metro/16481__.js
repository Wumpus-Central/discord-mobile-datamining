// === Module 16481: ? ===

// Module 16481
import withoutSetter from "withoutSetter" /* 16482 */;
import _mod16493 from "module_16493" /* 16493 */;
import _mod16495 from "module_16495" /* 16495 */;
import _mod16498 from "module_16498" /* 16498 */;
import _mod16501 from "module_16501" /* 16501 */;
import _mod16502 from "module_16502" /* 16502 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16493(arg0)) {
    if (!_mod16495(arg0)) {
      let str = arg1;
      const tmp4 = _mod16498(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16501(tmp4, arg0, str);
        if (_mod16493(tmp5)) {
          if (!_mod16495(tmp5)) {
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
        return _mod16502(arg0, str2);
      }
    }
  }
  return arg0;
};