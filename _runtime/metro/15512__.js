// === Module 15512: ? ===

// Module 15512
import withoutSetter from "withoutSetter" /* 15513 */;
import _mod15524 from "module_15524" /* 15524 */;
import _mod15526 from "module_15526" /* 15526 */;
import _mod15529 from "module_15529" /* 15529 */;
import _mod15532 from "module_15532" /* 15532 */;
import _mod15533 from "module_15533" /* 15533 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod15524(arg0)) {
    if (!_mod15526(arg0)) {
      let str = arg1;
      const tmp4 = _mod15529(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod15532(tmp4, arg0, str);
        if (_mod15524(tmp5)) {
          if (!_mod15526(tmp5)) {
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
        return _mod15533(arg0, str2);
      }
    }
  }
  return arg0;
};