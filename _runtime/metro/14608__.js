// _runtime/metro/14608__.js
import _mod14552 from "14552__.js";
import _mod14577 from "14577__.js";
import _mod14605 from "14605__.js";
import _mod14609 from "14609__.js";

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
  if (_mod14577(value)) {
    _mod14609(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14552(arg1, value);
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
        _mod14605.f(arg0, arg1, obj2);
        const tmp3Result = _mod14605;
      }
    } catch (err) {}
  }
  return arg0;
};
