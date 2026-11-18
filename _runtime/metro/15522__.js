// === Module 15522: ? ===

// Module 15522
import _mod15466 from "module_15466" /* 15466 */;
import _mod15491 from "module_15491" /* 15491 */;
import _mod15519 from "module_15519" /* 15519 */;
import _mod15523 from "module_15523" /* 15523 */;


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
  if (_mod15491(value)) {
    _mod15523(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15466(arg1, value);
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
        _mod15519.f(arg0, arg1, obj2);
        const tmp3Result = _mod15519;
      }
    } catch (err) {
    }
  }
  return arg0;
};