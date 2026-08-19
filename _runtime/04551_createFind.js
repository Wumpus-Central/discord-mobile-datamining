// === Module 4551: createFind ===

// Module 4551 (createFind)

export default function createFind(arg0) {
  closure_0 = arg0;
  return (arg0, arg1, arg2) => {
    const ObjectResult = Object(arg0);
    const callback = ObjectResult;
    let fn = arg1;
    let tmp5 = arg0;
    if (!callback(dependencyMap[0])(arg0)) {
      const tmp6 = tmp2(dependencyMap[1])(arg1, 3);
      closure_1 = tmp6;
      tmp5 = tmp2(dependencyMap[2])(arg0);
      fn = function u(arg0) {
        return callback(ObjectResult[arg0], arg0, ObjectResult);
      };
      const tmp4 = tmp6;
    }
    const tmp7 = callback(tmp5, fn, arg2);
    let tmp8;
    if (tmp7 > -1) {
      let tmp9 = tmp7;
      if (tmp4) {
        tmp9 = tmp5[tmp7];
      }
      tmp8 = ObjectResult[tmp9];
    }
    return tmp8;
  };
};