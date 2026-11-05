// === Module 16443: ? ===

// Module 16443
import _mod16387 from "module_16387" /* 16387 */;
import _mod16412 from "module_16412" /* 16412 */;
import _mod16440 from "module_16440" /* 16440 */;
import _mod16444 from "module_16444" /* 16444 */;


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
  if (_mod16412(value)) {
    _mod16444(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16387(arg1, value);
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
        _mod16440.f(arg0, arg1, obj2);
        const tmp3Result = _mod16440;
      }
    } catch (err) {
    }
  }
  return arg0;
};