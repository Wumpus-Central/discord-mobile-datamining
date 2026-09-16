// === Module 14470: ? ===

// Module 14470
import _mod14414 from "module_14414" /* 14414 */;
import _mod14439 from "module_14439" /* 14439 */;
import _mod14467 from "module_14467" /* 14467 */;
import _mod14471 from "module_14471" /* 14471 */;


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
  if (_mod14439(value)) {
    _mod14471(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14414(arg1, value);
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
        _mod14467.f(arg0, arg1, obj2);
        const tmp3Result = _mod14467;
      }
    } catch (err) {
    }
  }
  return arg0;
};