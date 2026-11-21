// _runtime/metro/15595__.js
import _mod15539 from "15539__.js";
import _mod15564 from "15564__.js";
import _mod15592 from "15592__.js";
import _mod15596 from "15596__.js";

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
  if (_mod15564(value)) {
    _mod15596(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod15539(arg1, value);
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
        _mod15592.f(arg0, arg1, obj2);
        const tmp3Result = _mod15592;
      }
    } catch (err) {}
  }
  return arg0;
};
