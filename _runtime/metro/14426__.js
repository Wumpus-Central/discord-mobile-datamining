// === Module 14426: ? ===

// Module 14426
import withoutSetter from "withoutSetter" /* 14427 */;
import _mod14438 from "module_14438" /* 14438 */;
import _mod14440 from "module_14440" /* 14440 */;
import _mod14443 from "module_14443" /* 14443 */;
import _mod14446 from "module_14446" /* 14446 */;
import _mod14447 from "module_14447" /* 14447 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14438(arg0)) {
    if (!_mod14440(arg0)) {
      let str = arg1;
      const tmp4 = _mod14443(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14446(tmp4, arg0, str);
        if (_mod14438(tmp5)) {
          if (!_mod14440(tmp5)) {
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
        return _mod14447(arg0, str2);
      }
    }
  }
  return arg0;
};