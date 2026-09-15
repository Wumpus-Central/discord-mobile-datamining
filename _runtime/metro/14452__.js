// === Module 14452: ? ===

// Module 14452
import _mod14396 from "module_14396" /* 14396 */;
import _mod14421 from "module_14421" /* 14421 */;
import _mod14449 from "module_14449" /* 14449 */;
import _mod14453 from "module_14453" /* 14453 */;


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
  if (_mod14421(value)) {
    _mod14453(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14396(arg1, value);
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
        _mod14449.f(arg0, arg1, obj2);
        const tmp3Result = _mod14449;
      }
    } catch (err) {
    }
  }
  return arg0;
};