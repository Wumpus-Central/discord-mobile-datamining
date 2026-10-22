// === Module 15499: ? ===

// Module 15499
import withoutSetter from "withoutSetter" /* 15500 */;
import _mod15511 from "module_15511" /* 15511 */;
import _mod15513 from "module_15513" /* 15513 */;
import _mod15516 from "module_15516" /* 15516 */;
import _mod15519 from "module_15519" /* 15519 */;
import _mod15520 from "module_15520" /* 15520 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15511(arg0)) {
    if (!_mod15513(arg0)) {
      let str = arg1;
      const tmp4 = _mod15516(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15519(tmp4, arg0, str);
        if (_mod15511(tmp5)) {
          if (!_mod15513(tmp5)) {
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
        return _mod15520(arg0, str2);
      }
    }
  }
  return arg0;
};