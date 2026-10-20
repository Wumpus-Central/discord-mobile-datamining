// === Module 15427: ? ===

// Module 15427
import _mod15371 from "module_15371" /* 15371 */;
import _mod15396 from "module_15396" /* 15396 */;
import _mod15424 from "module_15424" /* 15424 */;
import _mod15428 from "module_15428" /* 15428 */;


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
  if (_mod15396(value)) {
    _mod15428(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15371(arg1, value);
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
        _mod15424.f(arg0, arg1, obj2);
        const tmp3Result = _mod15424;
      }
    } catch (err) {
    }
  }
  return arg0;
};