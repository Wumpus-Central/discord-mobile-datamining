// === Module 13846: ? ===

// Module 13846
import withoutSetter from "withoutSetter" /* 13847 */;
import _mod13858 from "module_13858" /* 13858 */;
import _mod13860 from "module_13860" /* 13860 */;
import _mod13863 from "module_13863" /* 13863 */;
import _mod13866 from "module_13866" /* 13866 */;
import _mod13867 from "module_13867" /* 13867 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13858(arg0)) {
    if (!_mod13860(arg0)) {
      let str = arg1;
      const tmp4 = _mod13863(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13866(tmp4, arg0, str);
        if (_mod13858(tmp5)) {
          if (!_mod13860(tmp5)) {
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
        return _mod13867(arg0, str2);
      }
    }
  }
  return arg0;
};