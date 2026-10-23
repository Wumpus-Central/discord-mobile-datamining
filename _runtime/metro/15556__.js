// _runtime/metro/15556__.js
import _mod15500 from "15500__.js";
import _mod15525 from "15525__.js";
import _mod15553 from "15553__.js";
import _mod15557 from "15557__.js";

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
  if (_mod15525(value)) {
    _mod15557(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15500(arg1, value);
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
        _mod15553.f(arg0, arg1, obj2);
        const tmp3Result = _mod15553;
      }
    } catch (err) {}
  }
  return arg0;
};
