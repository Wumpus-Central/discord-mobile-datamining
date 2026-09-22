// === Module 14596: ? ===

// Module 14596
import withoutSetter from "withoutSetter" /* 14597 */;
import _mod14608 from "module_14608" /* 14608 */;
import _mod14610 from "module_14610" /* 14610 */;
import _mod14613 from "module_14613" /* 14613 */;
import _mod14616 from "module_14616" /* 14616 */;
import _mod14617 from "module_14617" /* 14617 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14608(arg0)) {
    if (!_mod14610(arg0)) {
      let str = arg1;
      const tmp4 = _mod14613(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14616(tmp4, arg0, str);
        if (_mod14608(tmp5)) {
          if (!_mod14610(tmp5)) {
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
        return _mod14617(arg0, str2);
      }
    }
  }
  return arg0;
};