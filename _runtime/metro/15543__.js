// _runtime/metro/15543__.js
import _mod15487 from "15487__.js";
import _mod15512 from "15512__.js";
import _mod15540 from "15540__.js";
import _mod15544 from "15544__.js";

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
  if (_mod15512(value)) {
    _mod15544(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15487(arg1, value);
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
        _mod15540.f(arg0, arg1, obj2);
        const tmp3Result = _mod15540;
      }
    } catch (err) {}
  }
  return arg0;
};
