// === Module 16760: ? ===

// Module 16760
import withoutSetter from "withoutSetter" /* 16761 */;
import _mod16772 from "module_16772" /* 16772 */;
import _mod16774 from "module_16774" /* 16774 */;
import _mod16777 from "module_16777" /* 16777 */;
import _mod16780 from "module_16780" /* 16780 */;
import _mod16781 from "module_16781" /* 16781 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16772(arg0)) {
    if (!_mod16774(arg0)) {
      let str = arg1;
      const tmp4 = _mod16777(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16780(tmp4, arg0, str);
        if (_mod16772(tmp5)) {
          if (!_mod16774(tmp5)) {
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
        return _mod16781(arg0, str2);
      }
    }
  }
  return arg0;
};