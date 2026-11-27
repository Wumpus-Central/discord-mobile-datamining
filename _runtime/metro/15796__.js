// _runtime/metro/15796__.js
import _mod15740 from "15740__.js";
import _mod15765 from "15765__.js";
import _mod15793 from "15793__.js";
import _mod15797 from "15797__.js";

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
  if (_mod15765(value)) {
    _mod15797(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15740(arg1, value);
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
        _mod15793.f(arg0, arg1, obj2);
        const tmp3Result = _mod15793;
      }
    } catch (err) {}
  }
  return arg0;
};
