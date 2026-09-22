// _runtime/metro/14640__.js
import _mod14584 from "14584__.js";
import _mod14609 from "14609__.js";
import _mod14637 from "14637__.js";
import _mod14641 from "14641__.js";

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
  if (_mod14609(value)) {
    _mod14641(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14584(arg1, value);
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
        _mod14637.f(arg0, arg1, obj2);
        const tmp3Result = _mod14637;
      }
    } catch (err) {}
  }
  return arg0;
};
