// _runtime/metro/15593__.js
import _mod15537 from "15537__.js";
import _mod15562 from "15562__.js";
import _mod15590 from "15590__.js";
import _mod15594 from "15594__.js";

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
  if (_mod15562(value)) {
    _mod15594(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15537(arg1, value);
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
        _mod15590.f(arg0, arg1, obj2);
        const tmp3Result = _mod15590;
      }
    } catch (err) {}
  }
  return arg0;
};
