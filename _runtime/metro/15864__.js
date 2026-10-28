// === Module 15864: ? ===

// Module 15864
import _mod15808 from "module_15808" /* 15808 */;
import _mod15833 from "module_15833" /* 15833 */;
import _mod15861 from "module_15861" /* 15861 */;
import _mod15865 from "module_15865" /* 15865 */;


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
  if (_mod15833(value)) {
    _mod15865(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15808(arg1, value);
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
        _mod15861.f(arg0, arg1, obj2);
        const tmp3Result = _mod15861;
      }
    } catch (err) {
    }
  }
  return arg0;
};