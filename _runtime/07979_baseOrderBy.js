// === Module 7979: baseOrderBy ===

// Module 7979 (baseOrderBy)

export default function baseOrderBy(arg0, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  if (arg1.length) {
    let items = tmp(tmp2[0])(arg1, (arg0) => {
      let fn = arg0;
      const callback = arg0;
      if (callback(599)(arg0)) {
        fn = (arg0) => {
          let first = lib;
          if (1 === lib.length) {
            first = lib[0];
          }
          return lib(closure_1_1[2])(arg0, first);
        };
      }
      return fn;
    });
    let tmp3 = tmp2;
    let tmp4 = tmp;
  } else {
    items = [tmp(tmp2[3])];
    tmp3 = tmp2;
    tmp4 = tmp;
  }
  closure_0 = items;
  c2 = -1;
  let tmp4Result = tmp4(tmp3[0]);
  tmp4Result = tmp4(tmp3[4]);
  closure_0 = tmp4Result(items, tmp4Result(tmp4(tmp3[5])));
  return tmp4(tmp3[7])(tmp4(tmp3[6])(arg0, (value) => {
    const callback = value;
    const sum = c2 + 1;
    c2 = sum;
    return { criteria: callback(764)(callback, (arg0) => arg0(closure_0)), index: sum, value };
  }), (arg0, arg1) => callback(7982)(arg0, arg1, dependencyMap));
};