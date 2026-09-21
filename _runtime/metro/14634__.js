// === Module 14634: ? ===

// Module 14634
import _mod14578 from "module_14578" /* 14578 */;
import _mod14603 from "module_14603" /* 14603 */;
import _mod14631 from "module_14631" /* 14631 */;
import _mod14635 from "module_14635" /* 14635 */;


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
  if (_mod14603(value)) {
    _mod14635(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14578(arg1, value);
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
        _mod14631.f(arg0, arg1, obj2);
        const tmp3Result = _mod14631;
      }
    } catch (err) {
    }
  }
  return arg0;
};