// === Module 15796: ? ===

// Module 15796
import _mod15740 from "module_15740" /* 15740 */;
import _mod15765 from "module_15765" /* 15765 */;
import _mod15793 from "module_15793" /* 15793 */;
import _mod15797 from "module_15797" /* 15797 */;


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
  if (_mod15765(value)) {
    _mod15797(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15740(arg1, value);
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
        _mod15793.f(arg0, arg1, obj2);
        const tmp3Result = _mod15793;
      }
    } catch (err) {
    }
  }
  return arg0;
};