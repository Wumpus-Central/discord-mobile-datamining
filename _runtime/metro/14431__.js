// === Module 14431: ? ===

// Module 14431
import _mod14375 from "module_14375" /* 14375 */;
import _mod14400 from "module_14400" /* 14400 */;
import _mod14428 from "module_14428" /* 14428 */;
import _mod14432 from "module_14432" /* 14432 */;


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
  if (_mod14400(value)) {
    _mod14432(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14375(arg1, value);
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
        _mod14428.f(arg0, arg1, obj);
        const tmp3Result = _mod14428;
      }
    } catch (err) {
    }
  }
  return arg0;
};