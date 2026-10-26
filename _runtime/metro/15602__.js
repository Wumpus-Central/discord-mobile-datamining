// === Module 15602: ? ===

// Module 15602
import _mod15546 from "module_15546" /* 15546 */;
import _mod15571 from "module_15571" /* 15571 */;
import _mod15599 from "module_15599" /* 15599 */;
import _mod15603 from "module_15603" /* 15603 */;


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
  if (_mod15571(value)) {
    _mod15603(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15546(arg1, value);
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
        _mod15599.f(arg0, arg1, obj2);
        const tmp3Result = _mod15599;
      }
    } catch (err) {
    }
  }
  return arg0;
};