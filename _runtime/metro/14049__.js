// === Module 14049: ? ===

// Module 14049
import _mod13993 from "module_13993" /* 13993 */;
import _mod14018 from "module_14018" /* 14018 */;
import _mod14046 from "module_14046" /* 14046 */;
import _mod14050 from "module_14050" /* 14050 */;


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
  if (_mod14018(value)) {
    _mod14050(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13993(arg1, value);
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
        _mod14046.f(arg0, arg1, obj2);
        const tmp3Result = _mod14046;
      }
    } catch (err) {
    }
  }
  return arg0;
};