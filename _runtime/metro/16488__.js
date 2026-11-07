// === Module 16488: ? ===

// Module 16488
import _mod16432 from "module_16432" /* 16432 */;
import _mod16457 from "module_16457" /* 16457 */;
import _mod16485 from "module_16485" /* 16485 */;
import _mod16489 from "module_16489" /* 16489 */;


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
  if (_mod16457(value)) {
    _mod16489(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16432(arg1, value);
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
        _mod16485.f(arg0, arg1, obj2);
        const tmp3Result = _mod16485;
      }
    } catch (err) {
    }
  }
  return arg0;
};