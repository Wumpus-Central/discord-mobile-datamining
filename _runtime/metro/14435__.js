// _runtime/metro/14435__.js
import _mod14379 from "14379__.js";
import _mod14404 from "14404__.js";
import _mod14432 from "14432__.js";
import _mod14436 from "14436__.js";

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
  if (_mod14404(value)) {
    _mod14436(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14379(arg1, value);
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
        _mod14432.f(arg0, arg1, obj2);
        const tmp3Result = _mod14432;
      }
    } catch (err) {}
  }
  return arg0;
};
