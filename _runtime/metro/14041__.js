// _runtime/metro/14041__.js
import _mod13985 from "13985__.js";
import _mod14010 from "14010__.js";
import _mod14038 from "14038__.js";
import _mod14042 from "14042__.js";

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
  if (_mod14010(value)) {
    _mod14042(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13985(arg1, value);
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
        _mod14038.f(arg0, arg1, obj2);
        const tmp3Result = _mod14038;
      }
    } catch (err) {}
  }
  return arg0;
};
