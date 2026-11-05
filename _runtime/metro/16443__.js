// _runtime/metro/16443__.js
import _mod16387 from "16387__.js";
import _mod16412 from "16412__.js";
import _mod16440 from "16440__.js";
import _mod16444 from "16444__.js";

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
  if (_mod16412(value)) {
    _mod16444(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16387(arg1, value);
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
        _mod16440.f(arg0, arg1, obj2);
        const tmp3Result = _mod16440;
      }
    } catch (err) {}
  }
  return arg0;
};
