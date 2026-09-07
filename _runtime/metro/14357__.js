// _runtime/metro/14357__.js
import _mod14301 from "14301__.js";
import _mod14326 from "14326__.js";
import _mod14354 from "14354__.js";
import _mod14358 from "14358__.js";

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
  if (_mod14326(value)) {
    _mod14358(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod14301(arg1, value);
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
        _mod14354.f(arg0, arg1, obj);
        const tmp3Result = _mod14354;
      }
    } catch (err) {}
  }
  return arg0;
};
