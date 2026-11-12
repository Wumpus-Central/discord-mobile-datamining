// _runtime/metro/16681__.js
import _mod16625 from "16625__.js";
import _mod16650 from "16650__.js";
import _mod16678 from "16678__.js";
import _mod16682 from "16682__.js";

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
  if (_mod16650(value)) {
    _mod16682(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16625(arg1, value);
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
        _mod16678.f(arg0, arg1, obj2);
        const tmp3Result = _mod16678;
      }
    } catch (err) {}
  }
  return arg0;
};
