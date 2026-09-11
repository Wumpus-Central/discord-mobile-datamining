// === Module 14363: ? ===

// Module 14363
import withoutSetter from "withoutSetter" /* 14364 */;
import _mod14375 from "module_14375" /* 14375 */;
import _mod14377 from "module_14377" /* 14377 */;
import _mod14380 from "module_14380" /* 14380 */;
import _mod14383 from "module_14383" /* 14383 */;
import _mod14384 from "module_14384" /* 14384 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14375(arg0)) {
    if (!_mod14377(arg0)) {
      let str = arg1;
      const tmp4 = _mod14380(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14383(tmp4, arg0, str);
        if (_mod14375(tmp5)) {
          if (!_mod14377(tmp5)) {
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
        return _mod14384(arg0, str2);
      }
    }
  }
  return arg0;
};