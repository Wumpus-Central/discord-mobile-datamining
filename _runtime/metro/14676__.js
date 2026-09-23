// === Module 14676: ? ===

// Module 14676
import withoutSetter from "withoutSetter" /* 14677 */;
import _mod14688 from "module_14688" /* 14688 */;
import _mod14690 from "module_14690" /* 14690 */;
import _mod14693 from "module_14693" /* 14693 */;
import _mod14696 from "module_14696" /* 14696 */;
import _mod14697 from "module_14697" /* 14697 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14688(arg0)) {
    if (!_mod14690(arg0)) {
      let str = arg1;
      const tmp4 = _mod14693(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14696(tmp4, arg0, str);
        if (_mod14688(tmp5)) {
          if (!_mod14690(tmp5)) {
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
        return _mod14697(arg0, str2);
      }
    }
  }
  return arg0;
};