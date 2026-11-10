// === Module 16525: ? ===

// Module 16525
import _mod16469 from "module_16469" /* 16469 */;
import _mod16494 from "module_16494" /* 16494 */;
import _mod16522 from "module_16522" /* 16522 */;
import _mod16526 from "module_16526" /* 16526 */;


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
  if (_mod16494(value)) {
    _mod16526(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16469(arg1, value);
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
        _mod16522.f(arg0, arg1, obj2);
        const tmp3Result = _mod16522;
      }
    } catch (err) {
    }
  }
  return arg0;
};