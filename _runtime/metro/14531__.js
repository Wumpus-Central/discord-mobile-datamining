// _runtime/metro/14531__.js
import _mod14475 from "14475__.js";
import _mod14500 from "14500__.js";
import _mod14528 from "14528__.js";
import _mod14532 from "14532__.js";

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
  if (_mod14500(value)) {
    _mod14532(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14475(arg1, value);
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
        _mod14528.f(arg0, arg1, obj2);
        const tmp3Result = _mod14528;
      }
    } catch (err) {}
  }
  return arg0;
};
