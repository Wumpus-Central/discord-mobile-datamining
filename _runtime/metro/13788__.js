// === Module 13788: ? ===

// Module 13788
import all from "all" /* 13757 */;


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
    tmp3(13789)(arg2, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = arg2;
    } else {
      tmp3(13732)(arg1, arg2);
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
        tmp3(13785).f(arg0, arg1, obj);
        const tmp3Result = tmp3(13785);
      }
    } catch (err) {
    }
  }
  return arg0;
};