// _runtime/metro/14478__.js
import _mod14422 from "14422__.js";
import _mod14447 from "14447__.js";
import _mod14475 from "14475__.js";
import _mod14479 from "14479__.js";

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
  if (_mod14447(value)) {
    _mod14479(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14422(arg1, value);
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
        _mod14475.f(arg0, arg1, obj2);
        const tmp3Result = _mod14475;
      }
    } catch (err) {}
  }
  return arg0;
};
