// === Module 14074: ? ===

// Module 14074
import withoutSetter from "withoutSetter" /* 14075 */;
import _mod14086 from "module_14086" /* 14086 */;
import _mod14088 from "module_14088" /* 14088 */;
import _mod14091 from "module_14091" /* 14091 */;
import _mod14094 from "module_14094" /* 14094 */;
import _mod14095 from "module_14095" /* 14095 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14086(arg0)) {
    if (!_mod14088(arg0)) {
      let str = arg1;
      const tmp4 = _mod14091(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod14094(tmp4, arg0, str);
        if (_mod14086(tmp5)) {
          if (!_mod14088(tmp5)) {
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
        return _mod14095(arg0, str2);
      }
    }
  }
  return arg0;
};