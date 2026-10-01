// === Module 14005: ? ===

// Module 14005
import withoutSetter from "withoutSetter" /* 14006 */;
import _mod14017 from "module_14017" /* 14017 */;
import _mod14019 from "module_14019" /* 14019 */;
import _mod14022 from "module_14022" /* 14022 */;
import _mod14025 from "module_14025" /* 14025 */;
import _mod14026 from "module_14026" /* 14026 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14017(arg0)) {
    if (!_mod14019(arg0)) {
      let str = arg1;
      const tmp4 = _mod14022(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14025(tmp4, arg0, str);
        if (_mod14017(tmp5)) {
          if (!_mod14019(tmp5)) {
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
        return _mod14026(arg0, str2);
      }
    }
  }
  return arg0;
};