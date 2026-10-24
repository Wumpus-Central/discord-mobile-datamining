// === Module 15597: ? ===

// Module 15597
import _mod15541 from "module_15541" /* 15541 */;
import _mod15566 from "module_15566" /* 15566 */;
import _mod15594 from "module_15594" /* 15594 */;
import _mod15598 from "module_15598" /* 15598 */;


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
  if (_mod15566(value)) {
    _mod15598(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15541(arg1, value);
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
        _mod15594.f(arg0, arg1, obj2);
        const tmp3Result = _mod15594;
      }
    } catch (err) {
    }
  }
  return arg0;
};