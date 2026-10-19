// _runtime/metro/15409__.js
import _mod15353 from "15353__.js";
import _mod15378 from "15378__.js";
import _mod15406 from "15406__.js";
import _mod15410 from "15410__.js";

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
  if (_mod15378(value)) {
    _mod15410(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15353(arg1, value);
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
        _mod15406.f(arg0, arg1, obj2);
        const tmp3Result = _mod15406;
      }
    } catch (err) {}
  }
  return arg0;
};
