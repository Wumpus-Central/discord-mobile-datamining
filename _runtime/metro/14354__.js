// _runtime/metro/14354__.js
import _mod14298 from "14298__.js";
import _mod14323 from "14323__.js";
import _mod14351 from "14351__.js";
import _mod14355 from "14355__.js";

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
  if (_mod14323(value)) {
    _mod14355(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14298(arg1, value);
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
        _mod14351.f(arg0, arg1, obj);
        const tmp3Result = _mod14351;
      }
    } catch (err) {}
  }
  return arg0;
};
