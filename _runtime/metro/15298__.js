// === Module 15298: ? ===

// Module 15298
import _mod15242 from "module_15242" /* 15242 */;
import _mod15267 from "module_15267" /* 15267 */;
import _mod15295 from "module_15295" /* 15295 */;
import _mod15299 from "module_15299" /* 15299 */;


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
  if (_mod15267(value)) {
    _mod15299(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15242(arg1, value);
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
        _mod15295.f(arg0, arg1, obj2);
        const tmp3Result = _mod15295;
      }
    } catch (err) {
    }
  }
  return arg0;
};