// _runtime/metro/16100__.js
import _mod16044 from "16044__.js";
import _mod16069 from "16069__.js";
import _mod16097 from "16097__.js";
import _mod16101 from "16101__.js";

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
  if (_mod16069(value)) {
    _mod16101(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16044(arg1, value);
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
        _mod16097.f(arg0, arg1, obj2);
        const tmp3Result = _mod16097;
      }
    } catch (err) {}
  }
  return arg0;
};
