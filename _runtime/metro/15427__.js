// _runtime/metro/15427__.js
import _mod15371 from "15371__.js";
import _mod15396 from "15396__.js";
import _mod15424 from "15424__.js";
import _mod15428 from "15428__.js";

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
  if (_mod15396(value)) {
    _mod15428(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15371(arg1, value);
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
        _mod15424.f(arg0, arg1, obj2);
        const tmp3Result = _mod15424;
      }
    } catch (err) {}
  }
  return arg0;
};
