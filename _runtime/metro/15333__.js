// === Module 15333: ? ===

// Module 15333
import withoutSetter from "withoutSetter" /* 15334 */;
import _mod15345 from "module_15345" /* 15345 */;
import _mod15347 from "module_15347" /* 15347 */;
import _mod15350 from "module_15350" /* 15350 */;
import _mod15353 from "module_15353" /* 15353 */;
import _mod15354 from "module_15354" /* 15354 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15345(arg0)) {
    if (!_mod15347(arg0)) {
      let str = arg1;
      const tmp4 = _mod15350(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15353(tmp4, arg0, str);
        if (_mod15345(tmp5)) {
          if (!_mod15347(tmp5)) {
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
        return _mod15354(arg0, str2);
      }
    }
  }
  return arg0;
};