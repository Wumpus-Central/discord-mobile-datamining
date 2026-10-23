// === Module 15577: ? ===

// Module 15577
import _mod15521 from "module_15521" /* 15521 */;
import _mod15546 from "module_15546" /* 15546 */;
import _mod15574 from "module_15574" /* 15574 */;
import _mod15578 from "module_15578" /* 15578 */;


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
  if (_mod15546(value)) {
    _mod15578(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15521(arg1, value);
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
        _mod15574.f(arg0, arg1, obj2);
        const tmp3Result = _mod15574;
      }
    } catch (err) {
    }
  }
  return arg0;
};