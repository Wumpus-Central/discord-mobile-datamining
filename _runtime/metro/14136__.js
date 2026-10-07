// === Module 14136: ? ===

// Module 14136
import _mod14080 from "module_14080" /* 14080 */;
import _mod14105 from "module_14105" /* 14105 */;
import _mod14133 from "module_14133" /* 14133 */;
import _mod14137 from "module_14137" /* 14137 */;


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
  if (_mod14105(value)) {
    _mod14137(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14080(arg1, value);
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
        _mod14133.f(arg0, arg1, obj2);
        const tmp3Result = _mod14133;
      }
    } catch (err) {
    }
  }
  return arg0;
};