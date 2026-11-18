// === Module 15478: ? ===

// Module 15478
import withoutSetter from "withoutSetter" /* 15479 */;
import _mod15490 from "module_15490" /* 15490 */;
import _mod15492 from "module_15492" /* 15492 */;
import _mod15495 from "module_15495" /* 15495 */;
import _mod15498 from "module_15498" /* 15498 */;
import _mod15499 from "module_15499" /* 15499 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15490(arg0)) {
    if (!_mod15492(arg0)) {
      let str = arg1;
      const tmp4 = _mod15495(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15498(tmp4, arg0, str);
        if (_mod15490(tmp5)) {
          if (!_mod15492(tmp5)) {
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
        return _mod15499(arg0, str2);
      }
    }
  }
  return arg0;
};