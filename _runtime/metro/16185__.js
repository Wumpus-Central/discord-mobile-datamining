// === Module 16185: ? ===

// Module 16185
import _mod16129 from "module_16129" /* 16129 */;
import _mod16154 from "module_16154" /* 16154 */;
import _mod16182 from "module_16182" /* 16182 */;
import _mod16186 from "module_16186" /* 16186 */;


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
  if (_mod16154(value)) {
    _mod16186(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16129(arg1, value);
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
        _mod16182.f(arg0, arg1, obj2);
        const tmp3Result = _mod16182;
      }
    } catch (err) {
    }
  }
  return arg0;
};