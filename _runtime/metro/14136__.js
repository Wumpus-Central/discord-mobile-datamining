// _runtime/metro/14136__.js
import _mod14080 from "14080__.js";
import _mod14105 from "14105__.js";
import _mod14133 from "14133__.js";
import _mod14137 from "14137__.js";

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
  if (_mod14105(value)) {
    _mod14137(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14080(arg1, value);
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
        _mod14133.f(arg0, arg1, obj2);
        const tmp3Result = _mod14133;
      }
    } catch (err) {}
  }
  return arg0;
};
