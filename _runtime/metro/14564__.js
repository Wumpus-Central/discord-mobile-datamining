// === Module 14564: ? ===

// Module 14564
import withoutSetter from "withoutSetter" /* 14565 */;
import _mod14576 from "module_14576" /* 14576 */;
import _mod14578 from "module_14578" /* 14578 */;
import _mod14581 from "module_14581" /* 14581 */;
import _mod14584 from "module_14584" /* 14584 */;
import _mod14585 from "module_14585" /* 14585 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14576(arg0)) {
    if (!_mod14578(arg0)) {
      let str = arg1;
      const tmp4 = _mod14581(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14584(tmp4, arg0, str);
        if (_mod14576(tmp5)) {
          if (!_mod14578(tmp5)) {
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
        return _mod14585(arg0, str2);
      }
    }
  }
  return arg0;
};