// === Module 517: ? ===

// Module 517
import _mod518 from "module_518" /* 518 */;


export default function createBaseEach(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, fn) => {
    if (null == arg0) {
      return arg0;
    } else if (_mod518(arg0)) {
      let num = -1;
      if (closure_1) {
        num = length;
      }
      const _Object = Object;
      const ObjectResult = Object(arg0);
      if (closure_1) {
        let diff = tmp7 - 1;
        let tmp6 = tmp7;
      } else {
        diff = num + 1;
        tmp6 = diff < length;
      }
      if (tmp6) {
        if (false !== fn(ObjectResult[diff], diff, ObjectResult)) {
          while (true) {
            if (closure_1) {
              let tmp12 = +diff;
              let diff1 = tmp12 - 1;
              let tmp11 = tmp12;
            } else {
              diff1 = diff + 1;
              tmp11 = diff1 < length;
            }
            if (!tmp11) {
              break;
            } else {
              diff = diff1;
              if (false === fn(ObjectResult[diff1], diff1, ObjectResult)) {
                break;
              }
            }
          }
        }
      }
      return arg0;
    } else {
      return closure_0(arg0, fn);
    }
  };
};