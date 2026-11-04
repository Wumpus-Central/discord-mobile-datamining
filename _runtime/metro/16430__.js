// === Module 16430: ? ===

// Module 16430
import _mod16374 from "module_16374" /* 16374 */;
import _mod16399 from "module_16399" /* 16399 */;
import _mod16427 from "module_16427" /* 16427 */;
import _mod16431 from "module_16431" /* 16431 */;


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
  if (_mod16399(value)) {
    _mod16431(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16374(arg1, value);
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
        _mod16427.f(arg0, arg1, obj2);
        const tmp3Result = _mod16427;
      }
    } catch (err) {
    }
  }
  return arg0;
};