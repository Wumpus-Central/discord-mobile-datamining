// === Module 15638: ? ===

// Module 15638
import _mod15582 from "module_15582" /* 15582 */;
import _mod15607 from "module_15607" /* 15607 */;
import _mod15635 from "module_15635" /* 15635 */;
import _mod15639 from "module_15639" /* 15639 */;


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
  if (_mod15607(value)) {
    _mod15639(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15582(arg1, value);
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
        _mod15635.f(arg0, arg1, obj2);
        const tmp3Result = _mod15635;
      }
    } catch (err) {
    }
  }
  return arg0;
};