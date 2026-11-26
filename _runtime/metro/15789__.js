// === Module 15789: ? ===

// Module 15789
import _mod15733 from "module_15733" /* 15733 */;
import _mod15758 from "module_15758" /* 15758 */;
import _mod15786 from "module_15786" /* 15786 */;
import _mod15790 from "module_15790" /* 15790 */;


export default (arg0, arg1, value, arg3) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  let name = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod15758(value)) {
    _mod15790(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15733(arg1, value);
    }
  } else {
    try {
      if (obj.unsafe) {
        if (arg0[arg1]) {
          flag = true;
        }
      } else {
        delete tmp[tmp2];
      }
      if (flag) {
        arg0[arg1] = value;
      } else {
        const obj2 = { value, enumerable: false, configurable: !obj.nonConfigurable, writable: !obj.nonWritable };
        _mod15786.f(arg0, arg1, obj2);
        const tmp3Result = _mod15786;
      }
    } catch (err) {
    }
  }
  return arg0;
};