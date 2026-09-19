// === Module 14584: ? ===

// Module 14584
import withoutSetter from "withoutSetter" /* 14585 */;
import _mod14596 from "module_14596" /* 14596 */;
import _mod14598 from "module_14598" /* 14598 */;
import _mod14601 from "module_14601" /* 14601 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14605 from "module_14605" /* 14605 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14596(arg0)) {
    if (!_mod14598(arg0)) {
      let str = arg1;
      const tmp4 = _mod14601(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14604(tmp4, arg0, str);
        if (_mod14596(tmp5)) {
          if (!_mod14598(tmp5)) {
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
        return _mod14605(arg0, str2);
      }
    }
  }
  return arg0;
};