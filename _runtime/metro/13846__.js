// _runtime/metro/13846__.js
import _mod13790 from "13790__.js";
import _mod13815 from "13815__.js";
import _mod13843 from "13843__.js";
import _mod13847 from "13847__.js";

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
  if (_mod13815(value)) {
    _mod13847(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13790(arg1, value);
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
        _mod13843.f(arg0, arg1, obj2);
        const tmp3Result = _mod13843;
      }
    } catch (err) {}
  }
  return arg0;
};
