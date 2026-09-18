// _runtime/metro/14573__.js
import _mod14517 from "14517__.js";
import _mod14542 from "14542__.js";
import _mod14570 from "14570__.js";
import _mod14574 from "14574__.js";

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
  if (_mod14542(value)) {
    _mod14574(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14517(arg1, value);
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
        _mod14570.f(arg0, arg1, obj2);
        const tmp3Result = _mod14570;
      }
    } catch (err) {}
  }
  return arg0;
};
