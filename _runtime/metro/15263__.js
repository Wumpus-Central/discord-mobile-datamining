// _runtime/metro/15263__.js
import _mod15207 from "15207__.js";
import _mod15232 from "15232__.js";
import _mod15260 from "15260__.js";
import _mod15264 from "15264__.js";

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
  if (_mod15232(value)) {
    _mod15264(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15207(arg1, value);
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
        _mod15260.f(arg0, arg1, obj2);
        const tmp3Result = _mod15260;
      }
    } catch (err) {}
  }
  return arg0;
};
