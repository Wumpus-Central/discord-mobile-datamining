// _runtime/metro/16140__.js
import _mod16084 from "16084__.js";
import _mod16109 from "16109__.js";
import _mod16137 from "16137__.js";
import _mod16141 from "16141__.js";

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
  if (_mod16109(value)) {
    _mod16141(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16084(arg1, value);
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
        _mod16137.f(arg0, arg1, obj2);
        const tmp3Result = _mod16137;
      }
    } catch (err) {}
  }
  return arg0;
};
