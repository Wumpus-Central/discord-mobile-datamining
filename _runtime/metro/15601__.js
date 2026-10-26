// _runtime/metro/15601__.js
import _mod15545 from "15545__.js";
import _mod15570 from "15570__.js";
import _mod15598 from "15598__.js";
import _mod15602 from "15602__.js";

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
  if (_mod15570(value)) {
    _mod15602(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15545(arg1, value);
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
        _mod15598.f(arg0, arg1, obj2);
        const tmp3Result = _mod15598;
      }
    } catch (err) {}
  }
  return arg0;
};
