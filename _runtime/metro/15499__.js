// === Module 15499: ? ===

// Module 15499
import _mod15443 from "module_15443" /* 15443 */;
import _mod15468 from "module_15468" /* 15468 */;
import _mod15496 from "module_15496" /* 15496 */;
import _mod15500 from "module_15500" /* 15500 */;


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
  if (_mod15468(value)) {
    _mod15500(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15443(arg1, value);
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
        _mod15496.f(arg0, arg1, obj2);
        const tmp3Result = _mod15496;
      }
    } catch (err) {
    }
  }
  return arg0;
};