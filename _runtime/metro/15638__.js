// _runtime/metro/15638__.js
import _mod15582 from "15582__.js";
import _mod15607 from "15607__.js";
import _mod15635 from "15635__.js";
import _mod15639 from "15639__.js";

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
  if (_mod15607(value)) {
    _mod15639(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15582(arg1, value);
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
        _mod15635.f(arg0, arg1, obj2);
        const tmp3Result = _mod15635;
      }
    } catch (err) {}
  }
  return arg0;
};
