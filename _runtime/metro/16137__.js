// === Module 16137: ? ===

// Module 16137
import withoutSetter from "withoutSetter" /* 16138 */;
import _mod16149 from "module_16149" /* 16149 */;
import _mod16151 from "module_16151" /* 16151 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16157 from "module_16157" /* 16157 */;
import _mod16158 from "module_16158" /* 16158 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16149(arg0)) {
    if (!_mod16151(arg0)) {
      let str = arg1;
      const tmp4 = _mod16154(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16157(tmp4, arg0, str);
        if (_mod16149(tmp5)) {
          if (!_mod16151(tmp5)) {
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
        return _mod16158(arg0, str2);
      }
    }
  }
  return arg0;
};