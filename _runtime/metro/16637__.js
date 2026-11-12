// === Module 16637: ? ===

// Module 16637
import withoutSetter from "withoutSetter" /* 16638 */;
import _mod16649 from "module_16649" /* 16649 */;
import _mod16651 from "module_16651" /* 16651 */;
import _mod16654 from "module_16654" /* 16654 */;
import _mod16657 from "module_16657" /* 16657 */;
import _mod16658 from "module_16658" /* 16658 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16649(arg0)) {
    if (!_mod16651(arg0)) {
      let str = arg1;
      const tmp4 = _mod16654(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16657(tmp4, arg0, str);
        if (_mod16649(tmp5)) {
          if (!_mod16651(tmp5)) {
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
        return _mod16658(arg0, str2);
      }
    }
  }
  return arg0;
};