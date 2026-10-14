// _runtime/metro/14967__.js
import _mod14911 from "14911__.js";
import _mod14936 from "14936__.js";
import _mod14964 from "14964__.js";
import _mod14968 from "14968__.js";

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
  if (_mod14936(value)) {
    _mod14968(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14911(arg1, value);
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
        _mod14964.f(arg0, arg1, obj2);
        const tmp3Result = _mod14964;
      }
    } catch (err) {}
  }
  return arg0;
};
