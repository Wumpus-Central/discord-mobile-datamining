// === Module 15601: ? ===

// Module 15601
import _mod15545 from "module_15545" /* 15545 */;
import _mod15570 from "module_15570" /* 15570 */;
import _mod15598 from "module_15598" /* 15598 */;
import _mod15602 from "module_15602" /* 15602 */;


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
  if (_mod15570(value)) {
    _mod15602(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15545(arg1, value);
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
        _mod15598.f(arg0, arg1, obj2);
        const tmp3Result = _mod15598;
      }
    } catch (err) {
    }
  }
  return arg0;
};