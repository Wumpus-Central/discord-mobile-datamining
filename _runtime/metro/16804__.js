// === Module 16804: ? ===

// Module 16804
import _mod16748 from "module_16748" /* 16748 */;
import _mod16773 from "module_16773" /* 16773 */;
import _mod16801 from "module_16801" /* 16801 */;
import _mod16805 from "module_16805" /* 16805 */;


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
  if (_mod16773(value)) {
    _mod16805(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16748(arg1, value);
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
        _mod16801.f(arg0, arg1, obj2);
        const tmp3Result = _mod16801;
      }
    } catch (err) {
    }
  }
  return arg0;
};