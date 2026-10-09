// === Module 14531: ? ===

// Module 14531
import _mod14475 from "module_14475" /* 14475 */;
import _mod14500 from "module_14500" /* 14500 */;
import _mod14528 from "module_14528" /* 14528 */;
import _mod14532 from "module_14532" /* 14532 */;


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
  if (_mod14500(value)) {
    _mod14532(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14475(arg1, value);
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
        _mod14528.f(arg0, arg1, obj2);
        const tmp3Result = _mod14528;
      }
    } catch (err) {
    }
  }
  return arg0;
};