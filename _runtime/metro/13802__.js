// === Module 13802: ? ===

// Module 13802
import withoutSetter from "withoutSetter" /* 13803 */;
import _mod13814 from "module_13814" /* 13814 */;
import _mod13816 from "module_13816" /* 13816 */;
import _mod13819 from "module_13819" /* 13819 */;
import _mod13822 from "module_13822" /* 13822 */;
import _mod13823 from "module_13823" /* 13823 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13814(arg0)) {
    if (!_mod13816(arg0)) {
      let str = arg1;
      const tmp4 = _mod13819(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13822(tmp4, arg0, str);
        if (_mod13814(tmp5)) {
          if (!_mod13816(tmp5)) {
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
        return _mod13823(arg0, str2);
      }
    }
  }
  return arg0;
};