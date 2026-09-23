// === Module 14720: ? ===

// Module 14720
import _mod14664 from "module_14664" /* 14664 */;
import _mod14689 from "module_14689" /* 14689 */;
import _mod14717 from "module_14717" /* 14717 */;
import _mod14721 from "module_14721" /* 14721 */;


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
  if (_mod14689(value)) {
    _mod14721(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14664(arg1, value);
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
        _mod14717.f(arg0, arg1, obj2);
        const tmp3Result = _mod14717;
      }
    } catch (err) {
    }
  }
  return arg0;
};