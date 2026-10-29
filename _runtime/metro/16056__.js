// === Module 16056: ? ===

// Module 16056
import withoutSetter from "withoutSetter" /* 16057 */;
import _mod16068 from "module_16068" /* 16068 */;
import _mod16070 from "module_16070" /* 16070 */;
import _mod16073 from "module_16073" /* 16073 */;
import _mod16076 from "module_16076" /* 16076 */;
import _mod16077 from "module_16077" /* 16077 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16068(arg0)) {
    if (!_mod16070(arg0)) {
      let str = arg1;
      const tmp4 = _mod16073(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16076(tmp4, arg0, str);
        if (_mod16068(tmp5)) {
          if (!_mod16070(tmp5)) {
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
        return _mod16077(arg0, str2);
      }
    }
  }
  return arg0;
};