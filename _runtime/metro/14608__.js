// === Module 14608: ? ===

// Module 14608
import _mod14552 from "module_14552" /* 14552 */;
import _mod14577 from "module_14577" /* 14577 */;
import _mod14605 from "module_14605" /* 14605 */;
import _mod14609 from "module_14609" /* 14609 */;


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
  if (_mod14577(value)) {
    _mod14609(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14552(arg1, value);
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
        _mod14605.f(arg0, arg1, obj2);
        const tmp3Result = _mod14605;
      }
    } catch (err) {
    }
  }
  return arg0;
};