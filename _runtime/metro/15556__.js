// === Module 15556: ? ===

// Module 15556
import _mod15500 from "module_15500" /* 15500 */;
import _mod15525 from "module_15525" /* 15525 */;
import _mod15553 from "module_15553" /* 15553 */;
import _mod15557 from "module_15557" /* 15557 */;


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
  if (_mod15525(value)) {
    _mod15557(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15500(arg1, value);
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
        _mod15553.f(arg0, arg1, obj2);
        const tmp3Result = _mod15553;
      }
    } catch (err) {
    }
  }
  return arg0;
};