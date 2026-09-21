// === Module 14590: ? ===

// Module 14590
import withoutSetter from "withoutSetter" /* 14591 */;
import _mod14602 from "module_14602" /* 14602 */;
import _mod14604 from "module_14604" /* 14604 */;
import _mod14607 from "module_14607" /* 14607 */;
import _mod14610 from "module_14610" /* 14610 */;
import _mod14611 from "module_14611" /* 14611 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14602(arg0)) {
    if (!_mod14604(arg0)) {
      let str = arg1;
      const tmp4 = _mod14607(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14610(tmp4, arg0, str);
        if (_mod14602(tmp5)) {
          if (!_mod14604(tmp5)) {
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
        return _mod14611(arg0, str2);
      }
    }
  }
  return arg0;
};