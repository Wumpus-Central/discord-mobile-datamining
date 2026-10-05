// _runtime/metro/14118__.js
import _mod14062 from "14062__.js";
import _mod14087 from "14087__.js";
import _mod14115 from "14115__.js";
import _mod14119 from "14119__.js";

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
  if (_mod14087(value)) {
    _mod14119(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14062(arg1, value);
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
        _mod14115.f(arg0, arg1, obj2);
        const tmp3Result = _mod14115;
      }
    } catch (err) {}
  }
  return arg0;
};
