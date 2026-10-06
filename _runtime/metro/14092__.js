// === Module 14092: ? ===

// Module 14092
import _mod14093 from "module_14093" /* 14093 */;
import _mod14104 from "module_14104" /* 14104 */;
import _mod14106 from "module_14106" /* 14106 */;
import _mod14109 from "module_14109" /* 14109 */;
import _mod14112 from "module_14112" /* 14112 */;
import _mod14113 from "module_14113" /* 14113 */;

let closure_3 = _mod14093("toPrimitive");

export default function(arg0, arg1) {
  if (_mod14104(arg0)) {
    if (!_mod14106(arg0)) {
      let str = arg1;
      const tmp4 = _mod14109(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14112(tmp4, arg0, str);
        if (_mod14104(tmp5)) {
          if (!_mod14106(tmp5)) {
            const self = this;
            const self2 = this;
            const tmp7 = new TypeError("Can't convert object to primitive value");
            throw tmp7;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod14113(arg0, str2);
      }
    }
  }
  return arg0;
};