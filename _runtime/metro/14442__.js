// === Module 14442: ? ===

// Module 14442
import _mod14386 from "module_14386" /* 14386 */;
import _mod14411 from "module_14411" /* 14411 */;
import _mod14439 from "module_14439" /* 14439 */;
import _mod14443 from "module_14443" /* 14443 */;


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
  if (_mod14411(value)) {
    _mod14443(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14386(arg1, value);
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
        _mod14439.f(arg0, arg1, obj);
        const tmp3Result = _mod14439;
      }
    } catch (err) {
    }
  }
  return arg0;
};