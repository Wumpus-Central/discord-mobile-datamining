// === Module 16417: ? ===

// Module 16417
import _mod16361 from "module_16361" /* 16361 */;
import _mod16386 from "module_16386" /* 16386 */;
import _mod16414 from "module_16414" /* 16414 */;
import _mod16418 from "module_16418" /* 16418 */;


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
  if (_mod16386(value)) {
    _mod16418(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16361(arg1, value);
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
        _mod16414.f(arg0, arg1, obj2);
        const tmp3Result = _mod16414;
      }
    } catch (err) {
    }
  }
  return arg0;
};