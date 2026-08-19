// === Module 13686: ? ===

// Module 13686
import withoutSetter from "withoutSetter" /* 13687 */;
import all from "all" /* 13698 */;
import _mod13700 from "module_13700" /* 13700 */;
import _mod13703 from "module_13703" /* 13703 */;
import call from "call" /* 13706 */;
import _mod13707 from "module_13707" /* 13707 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (all(arg0)) {
    if (!_mod13700(arg0)) {
      let str = arg1;
      const tmp4 = _mod13703(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = call(tmp4, arg0, str);
        if (all(tmp5)) {
          if (!_mod13700(tmp5)) {
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
        return _mod13707(arg0, str2);
      }
    }
  }
  return arg0;
};