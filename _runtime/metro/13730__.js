// === Module 13730: ? ===

// Module 13730
import _mod13674 from "module_13674" /* 13674 */;
import all from "all" /* 13699 */;
import defineProperty from "defineProperty" /* 13727 */;
import text from "text" /* 13731 */;


export default (arg0, arg1, arg2, arg3) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  let name = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (all(arg2)) {
    text(arg2, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = arg2;
    } else {
      _mod13674(arg1, arg2);
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
        arg0[arg1] = arg2;
      } else {
        obj = { value: null, enumerable: false, configurable: null, writable: null };
        obj[0] = arg2;
        obj[2] = !obj.nonConfigurable;
        obj[3] = !obj.nonWritable;
        defineProperty.f(arg0, arg1, obj);
        const tmp3Result = defineProperty;
      }
    } catch (err) {
    }
  }
  return arg0;
};