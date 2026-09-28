// _runtime/metro/13845__.js
import _mod13789 from "13789__.js";
import _mod13814 from "13814__.js";
import _mod13842 from "13842__.js";
import _mod13846 from "13846__.js";

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
  if (_mod13814(value)) {
    _mod13846(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13789(arg1, value);
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
        _mod13842.f(arg0, arg1, obj2);
        const tmp3Result = _mod13842;
      }
    } catch (err) {}
  }
  return arg0;
};
