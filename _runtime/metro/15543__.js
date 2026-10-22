// === Module 15543: ? ===

// Module 15543
import _mod15487 from "module_15487" /* 15487 */;
import _mod15512 from "module_15512" /* 15512 */;
import _mod15540 from "module_15540" /* 15540 */;
import _mod15544 from "module_15544" /* 15544 */;


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
  if (_mod15512(value)) {
    _mod15544(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15487(arg1, value);
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
        _mod15540.f(arg0, arg1, obj2);
        const tmp3Result = _mod15540;
      }
    } catch (err) {
    }
  }
  return arg0;
};