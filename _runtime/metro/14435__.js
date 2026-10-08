// === Module 14435: ? ===

// Module 14435
import _mod14379 from "module_14379" /* 14379 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14432 from "module_14432" /* 14432 */;
import _mod14436 from "module_14436" /* 14436 */;


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
  if (_mod14404(value)) {
    _mod14436(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14379(arg1, value);
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
        _mod14432.f(arg0, arg1, obj2);
        const tmp3Result = _mod14432;
      }
    } catch (err) {
    }
  }
  return arg0;
};