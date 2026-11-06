// _runtime/metro/16440__.js
import _mod16384 from "16384__.js";
import _mod16409 from "16409__.js";
import _mod16437 from "16437__.js";
import _mod16441 from "16441__.js";

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
  if (_mod16409(value)) {
    _mod16441(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16384(arg1, value);
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
        _mod16437.f(arg0, arg1, obj2);
        const tmp3Result = _mod16437;
      }
    } catch (err) {}
  }
  return arg0;
};
