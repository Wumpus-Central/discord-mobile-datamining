// === Module 13997: ? ===

// Module 13997
import withoutSetter from "withoutSetter" /* 13998 */;
import _mod14009 from "module_14009" /* 14009 */;
import _mod14011 from "module_14011" /* 14011 */;
import _mod14014 from "module_14014" /* 14014 */;
import _mod14017 from "module_14017" /* 14017 */;
import _mod14018 from "module_14018" /* 14018 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14009(arg0)) {
    if (!_mod14011(arg0)) {
      let str = arg1;
      const tmp4 = _mod14014(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14017(tmp4, arg0, str);
        if (_mod14009(tmp5)) {
          if (!_mod14011(tmp5)) {
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
        return _mod14018(arg0, str2);
      }
    }
  }
  return arg0;
};