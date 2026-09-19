// === Module 14628: ? ===

// Module 14628
import _mod14572 from "module_14572" /* 14572 */;
import _mod14597 from "module_14597" /* 14597 */;
import _mod14625 from "module_14625" /* 14625 */;
import _mod14629 from "module_14629" /* 14629 */;


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
  if (_mod14597(value)) {
    _mod14629(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14572(arg1, value);
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
        _mod14625.f(arg0, arg1, obj2);
        const tmp3Result = _mod14625;
      }
    } catch (err) {
    }
  }
  return arg0;
};