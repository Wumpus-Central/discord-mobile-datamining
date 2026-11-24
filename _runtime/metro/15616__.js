// _runtime/metro/15616__.js
import _mod15560 from "15560__.js";
import _mod15585 from "15585__.js";
import _mod15613 from "15613__.js";
import _mod15617 from "15617__.js";

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
  if (_mod15585(value)) {
    _mod15617(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15560(arg1, value);
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
        _mod15613.f(arg0, arg1, obj2);
        const tmp3Result = _mod15613;
      }
    } catch (err) {}
  }
  return arg0;
};
