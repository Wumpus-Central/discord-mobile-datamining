// _runtime/metro/16328__.js
import _mod16272 from "16272__.js";
import _mod16297 from "16297__.js";
import _mod16325 from "16325__.js";
import _mod16329 from "16329__.js";

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
  if (_mod16297(value)) {
    _mod16329(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16272(arg1, value);
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
        _mod16325.f(arg0, arg1, obj2);
        const tmp3Result = _mod16325;
      }
    } catch (err) {}
  }
  return arg0;
};
