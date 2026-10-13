// === Module 14929: ? ===

// Module 14929
import _mod14873 from "module_14873" /* 14873 */;
import _mod14898 from "module_14898" /* 14898 */;
import _mod14926 from "module_14926" /* 14926 */;
import _mod14930 from "module_14930" /* 14930 */;


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
  if (_mod14898(value)) {
    _mod14930(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14873(arg1, value);
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
        _mod14926.f(arg0, arg1, obj2);
        const tmp3Result = _mod14926;
      }
    } catch (err) {
    }
  }
  return arg0;
};