// _runtime/metro/16181__.js
import _mod16125 from "16125__.js";
import _mod16150 from "16150__.js";
import _mod16178 from "16178__.js";
import _mod16182 from "16182__.js";

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
  if (_mod16150(value)) {
    _mod16182(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      _mod16125(arg1, value);
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
        _mod16178.f(arg0, arg1, obj2);
        const tmp3Result = _mod16178;
      }
    } catch (err) {}
  }
  return arg0;
};
