// _runtime/metro/15738__.js
import _mod15682 from "15682__.js";
import _mod15707 from "15707__.js";
import _mod15735 from "15735__.js";
import _mod15739 from "15739__.js";

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
  if (_mod15707(value)) {
    _mod15739(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15682(arg1, value);
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
        _mod15735.f(arg0, arg1, obj2);
        const tmp3Result = _mod15735;
      }
    } catch (err) {}
  }
  return arg0;
};
