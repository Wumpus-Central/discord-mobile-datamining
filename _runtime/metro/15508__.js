// === Module 15508: ? ===

// Module 15508
import _mod15452 from "module_15452" /* 15452 */;
import _mod15477 from "module_15477" /* 15477 */;
import _mod15505 from "module_15505" /* 15505 */;
import _mod15509 from "module_15509" /* 15509 */;


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
  if (_mod15477(value)) {
    _mod15509(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15452(arg1, value);
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
        _mod15505.f(arg0, arg1, obj2);
        const tmp3Result = _mod15505;
      }
    } catch (err) {
    }
  }
  return arg0;
};