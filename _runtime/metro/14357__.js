// === Module 14357: ? ===

// Module 14357
import _mod14301 from "module_14301" /* 14301 */;
import _mod14326 from "module_14326" /* 14326 */;
import _mod14354 from "module_14354" /* 14354 */;
import _mod14358 from "module_14358" /* 14358 */;


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
  if (_mod14326(value)) {
    _mod14358(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14301(arg1, value);
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
        obj = { value, enumerable: false, configurable: null, writable: null };
        obj.configurable = !obj.nonConfigurable;
        obj.writable = !obj.nonWritable;
        _mod14354.f(arg0, arg1, obj);
        const tmp3Result = _mod14354;
      }
    } catch (err) {
    }
  }
  return arg0;
};