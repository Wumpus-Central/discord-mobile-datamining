// === Module 14407: ? ===

// Module 14407
import _mod14351 from "module_14351" /* 14351 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14408 from "module_14408" /* 14408 */;


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
  if (_mod14376(value)) {
    _mod14408(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14351(arg1, value);
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
        obj = { value, enumerable: false, configurable: null, writable: null };
        obj.configurable = !obj.nonConfigurable;
        obj.writable = !obj.nonWritable;
        _mod14404.f(arg0, arg1, obj);
        const tmp3Result = _mod14404;
      }
    } catch (err) {
    }
  }
  return arg0;
};