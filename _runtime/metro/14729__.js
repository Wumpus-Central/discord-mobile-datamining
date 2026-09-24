// === Module 14729: ? ===

// Module 14729
import _mod14673 from "module_14673" /* 14673 */;
import _mod14698 from "module_14698" /* 14698 */;
import _mod14726 from "module_14726" /* 14726 */;
import _mod14730 from "module_14730" /* 14730 */;


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
  if (_mod14698(value)) {
    _mod14730(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14673(arg1, value);
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
        _mod14726.f(arg0, arg1, obj2);
        const tmp3Result = _mod14726;
      }
    } catch (err) {
    }
  }
  return arg0;
};