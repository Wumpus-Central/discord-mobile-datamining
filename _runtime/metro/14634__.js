// _runtime/metro/14634__.js
import _mod14578 from "14578__.js";
import _mod14603 from "14603__.js";
import _mod14631 from "14631__.js";
import _mod14635 from "14635__.js";

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
  if (_mod14603(value)) {
    _mod14635(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14578(arg1, value);
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
        _mod14631.f(arg0, arg1, obj2);
        const tmp3Result = _mod14631;
      }
    } catch (err) {}
  }
  return arg0;
};
