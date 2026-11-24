// === Module 15572: ? ===

// Module 15572
import withoutSetter from "withoutSetter" /* 15573 */;
import _mod15584 from "module_15584" /* 15584 */;
import _mod15586 from "module_15586" /* 15586 */;
import _mod15589 from "module_15589" /* 15589 */;
import _mod15592 from "module_15592" /* 15592 */;
import _mod15593 from "module_15593" /* 15593 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15584(arg0)) {
    if (!_mod15586(arg0)) {
      let str = arg1;
      const tmp4 = _mod15589(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15592(tmp4, arg0, str);
        if (_mod15584(tmp5)) {
          if (!_mod15586(tmp5)) {
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
        return _mod15593(arg0, str2);
      }
    }
  }
  return arg0;
};