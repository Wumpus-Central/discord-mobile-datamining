// _runtime/metro/16498__.js
import _mod16442 from "16442__.js";
import _mod16467 from "16467__.js";
import _mod16495 from "16495__.js";
import _mod16499 from "16499__.js";

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
  if (_mod16467(value)) {
    _mod16499(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16442(arg1, value);
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
        _mod16495.f(arg0, arg1, obj2);
        const tmp3Result = _mod16495;
      }
    } catch (err) {}
  }
  return arg0;
};
