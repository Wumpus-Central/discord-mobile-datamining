// _runtime/metro/14014__.js
import _mod13958 from "13958__.js";
import _mod13983 from "13983__.js";
import _mod14011 from "14011__.js";
import _mod14015 from "14015__.js";

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
  if (_mod13983(value)) {
    _mod14015(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod13958(arg1, value);
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
        _mod14011.f(arg0, arg1, obj2);
        const tmp3Result = _mod14011;
      }
    } catch (err) {}
  }
  return arg0;
};
