// === Module 14585: ? ===

// Module 14585
import _mod14529 from "module_14529" /* 14529 */;
import _mod14554 from "module_14554" /* 14554 */;
import _mod14582 from "module_14582" /* 14582 */;
import _mod14586 from "module_14586" /* 14586 */;


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
  if (_mod14554(value)) {
    _mod14586(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14529(arg1, value);
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
        _mod14582.f(arg0, arg1, obj2);
        const tmp3Result = _mod14582;
      }
    } catch (err) {
    }
  }
  return arg0;
};