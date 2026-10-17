// _runtime/metro/15377__.js
import _mod15321 from "15321__.js";
import _mod15346 from "15346__.js";
import _mod15374 from "15374__.js";
import _mod15378 from "15378__.js";

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
  if (_mod15346(value)) {
    _mod15378(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15321(arg1, value);
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
        _mod15374.f(arg0, arg1, obj2);
        const tmp3Result = _mod15374;
      }
    } catch (err) {}
  }
  return arg0;
};
