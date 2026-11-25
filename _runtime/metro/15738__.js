// === Module 15738: ? ===

// Module 15738
import _mod15682 from "module_15682" /* 15682 */;
import _mod15707 from "module_15707" /* 15707 */;
import _mod15735 from "module_15735" /* 15735 */;
import _mod15739 from "module_15739" /* 15739 */;


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
  if (_mod15707(value)) {
    _mod15739(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15682(arg1, value);
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
        _mod15735.f(arg0, arg1, obj2);
        const tmp3Result = _mod15735;
      }
    } catch (err) {
    }
  }
  return arg0;
};