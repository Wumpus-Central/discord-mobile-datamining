// _runtime/metro/15577__.js
import _mod15521 from "15521__.js";
import _mod15546 from "15546__.js";
import _mod15574 from "15574__.js";
import _mod15578 from "15578__.js";

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
  if (_mod15546(value)) {
    _mod15578(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15521(arg1, value);
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
        _mod15574.f(arg0, arg1, obj2);
        const tmp3Result = _mod15574;
      }
    } catch (err) {}
  }
  return arg0;
};
