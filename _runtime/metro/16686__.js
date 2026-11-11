// === Module 16686: ? ===

// Module 16686
import _mod16630 from "module_16630" /* 16630 */;
import _mod16655 from "module_16655" /* 16655 */;
import _mod16683 from "module_16683" /* 16683 */;
import _mod16687 from "module_16687" /* 16687 */;


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
  if (_mod16655(value)) {
    _mod16687(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16630(arg1, value);
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
        _mod16683.f(arg0, arg1, obj2);
        const tmp3Result = _mod16683;
      }
    } catch (err) {
    }
  }
  return arg0;
};