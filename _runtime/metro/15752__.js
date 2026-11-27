// === Module 15752: ? ===

// Module 15752
import withoutSetter from "withoutSetter" /* 15753 */;
import _mod15764 from "module_15764" /* 15764 */;
import _mod15766 from "module_15766" /* 15766 */;
import _mod15769 from "module_15769" /* 15769 */;
import _mod15772 from "module_15772" /* 15772 */;
import _mod15773 from "module_15773" /* 15773 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15764(arg0)) {
    if (!_mod15766(arg0)) {
      let str = arg1;
      const tmp4 = _mod15769(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15772(tmp4, arg0, str);
        if (_mod15764(tmp5)) {
          if (!_mod15766(tmp5)) {
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
        return _mod15773(arg0, str2);
      }
    }
  }
  return arg0;
};