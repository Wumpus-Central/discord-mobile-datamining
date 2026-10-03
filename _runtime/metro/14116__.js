// === Module 14116: ? ===

// Module 14116
import _mod14060 from "module_14060" /* 14060 */;
import _mod14085 from "module_14085" /* 14085 */;
import _mod14113 from "module_14113" /* 14113 */;
import _mod14117 from "module_14117" /* 14117 */;


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
  if (_mod14085(value)) {
    _mod14117(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14060(arg1, value);
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
        _mod14113.f(arg0, arg1, obj2);
        const tmp3Result = _mod14113;
      }
    } catch (err) {
    }
  }
  return arg0;
};