// _runtime/metro/14443__.js
import _mod14387 from "14387__.js";
import _mod14412 from "14412__.js";
import _mod14440 from "14440__.js";
import _mod14444 from "14444__.js";

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
  if (_mod14412(value)) {
    _mod14444(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14387(arg1, value);
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
        _mod14440.f(arg0, arg1, obj2);
        const tmp3Result = _mod14440;
      }
    } catch (err) {}
  }
  return arg0;
};
