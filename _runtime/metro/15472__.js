// _runtime/metro/15472__.js
import _mod15416 from "15416__.js";
import _mod15441 from "15441__.js";
import _mod15469 from "15469__.js";
import _mod15473 from "15473__.js";

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
  if (_mod15441(value)) {
    _mod15473(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15416(arg1, value);
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
        _mod15469.f(arg0, arg1, obj2);
        const tmp3Result = _mod15469;
      }
    } catch (err) {}
  }
  return arg0;
};
