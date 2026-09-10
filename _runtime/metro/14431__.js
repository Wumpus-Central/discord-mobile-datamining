// _runtime/metro/14431__.js
import _mod14375 from "14375__.js";
import _mod14400 from "14400__.js";
import _mod14428 from "14428__.js";
import _mod14432 from "14432__.js";

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
  if (_mod14400(value)) {
    _mod14432(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14375(arg1, value);
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
        obj = { value, enumerable: false, configurable: null, writable: null };
        obj.configurable = !obj.nonConfigurable;
        obj.writable = !obj.nonWritable;
        _mod14428.f(arg0, arg1, obj);
        const tmp3Result = _mod14428;
      }
    } catch (err) {}
  }
  return arg0;
};
