// === Module 15533: ? ===

// Module 15533
import withoutSetter from "withoutSetter" /* 15534 */;
import _mod15545 from "module_15545" /* 15545 */;
import _mod15547 from "module_15547" /* 15547 */;
import _mod15550 from "module_15550" /* 15550 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15554 from "module_15554" /* 15554 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15545(arg0)) {
    if (!_mod15547(arg0)) {
      let str = arg1;
      const tmp4 = _mod15550(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15553(tmp4, arg0, str);
        if (_mod15545(tmp5)) {
          if (!_mod15547(tmp5)) {
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
        return _mod15554(arg0, str2);
      }
    }
  }
  return arg0;
};