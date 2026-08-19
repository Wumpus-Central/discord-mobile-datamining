// === Module 602: createBaseEach ===

// Module 602 (createBaseEach)

export default function createBaseEach(arg0) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, fn) => {
    if (null == arg0) {
      return arg0;
    } else if (callback(table[0])(arg0)) {
      let num = -1;
      if (table) {
        num = length;
      }
      const _Object = Object;
      const ObjectResult = Object(arg0);
      if (table) {
        let diff = tmp7 - 1;
        let tmp6 = tmp7;
      } else {
        diff = num + 1;
        tmp6 = diff < length;
      }
      if (tmp6) {
        if (false !== fn(ObjectResult[diff], diff, ObjectResult)) {
          while (true) {
            if (table) {
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
      return callback(arg0, fn);
    }
  };
};