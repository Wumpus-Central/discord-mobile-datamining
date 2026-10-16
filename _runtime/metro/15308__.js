// === Module 15308: ? ===

// Module 15308
import _mod15252 from "module_15252" /* 15252 */;
import _mod15277 from "module_15277" /* 15277 */;
import _mod15305 from "module_15305" /* 15305 */;
import _mod15309 from "module_15309" /* 15309 */;


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
  if (_mod15277(value)) {
    _mod15309(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15252(arg1, value);
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
        _mod15305.f(arg0, arg1, obj2);
        const tmp3Result = _mod15305;
      }
    } catch (err) {
    }
  }
  return arg0;
};