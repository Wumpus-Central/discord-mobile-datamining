// === Module 15694: ? ===

// Module 15694
import withoutSetter from "withoutSetter" /* 15695 */;
import _mod15706 from "module_15706" /* 15706 */;
import _mod15708 from "module_15708" /* 15708 */;
import _mod15711 from "module_15711" /* 15711 */;
import _mod15714 from "module_15714" /* 15714 */;
import _mod15715 from "module_15715" /* 15715 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15706(arg0)) {
    if (!_mod15708(arg0)) {
      let str = arg1;
      const tmp4 = _mod15711(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15714(tmp4, arg0, str);
        if (_mod15706(tmp5)) {
          if (!_mod15708(tmp5)) {
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
        return _mod15715(arg0, str2);
      }
    }
  }
  return arg0;
};