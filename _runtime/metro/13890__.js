// === Module 13890: ? ===

// Module 13890
import _mod13834 from "module_13834" /* 13834 */;
import _mod13859 from "module_13859" /* 13859 */;
import _mod13887 from "module_13887" /* 13887 */;
import _mod13891 from "module_13891" /* 13891 */;


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
  if (_mod13859(value)) {
    _mod13891(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13834(arg1, value);
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
        _mod13887.f(arg0, arg1, obj2);
        const tmp3Result = _mod13887;
      }
    } catch (err) {
    }
  }
  return arg0;
};